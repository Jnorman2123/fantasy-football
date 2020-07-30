from django.core.management.base import BaseCommand
from quarterbacks.models import Quarterback
import requests

res = requests.get(
    "https://www.fantasyfootballdatapros.com/api/players/2019/all")
quarterbacks = []

if res.ok:
    data = res.json()
    for player in data:
        if player.get("position") == "QB":
            points = round((
                player.get("stats").get("passing").get("passing_td")*4 +
                player.get("stats").get("passing").get("passing_yds")*.04 +
                player.get("stats").get("rushing").get("rushing_td")*6 +
                player.get("stats").get("rushing").get("rushing_yds")*.10 -
                player.get("fumbles_lost")*2 -
                player.get("stats").get("passing").get("int")
            ), 2)

            points_per_game = round((points/player.get("games_played")), 2)

            total_att = player.get("stats").get("passing").get(
                "passing_att") + player.get("stats").get("rushing").get("rushing_att")

            total_td = player.get("stats").get("passing").get(
                "passing_td") + player.get("stats").get("rushing").get("rushing_td")

            if player.get("stats").get("passing").get("passing_att") > 0 and player.get("stats").get("passing").get("passing_td") > 0:
                completion_percentage = round((
                    player.get("stats").get("passing").get("passing_cmp") /
                    player.get("stats").get("passing").get("passing_att") * 100
                ), 2)

                pass_per_touchdown = round((
                    player.get("stats").get("passing").get("passing_att") /
                    player.get("stats").get("passing").get("passing_td")
                ), 2)

                yards_per_pass = round((
                    player.get("stats").get("passing").get("passing_yds") /
                    player.get("stats").get("passing").get("passing_att")
                ), 2)

                yards_per_comp = round((
                    player.get("stats").get("passing").get("passing_yds") /
                    player.get("stats").get("passing").get("passing_cmp")
                ), 2)

            if player.get("stats").get("rushing").get("rushing_att") > 0 and player.get("stats").get("rushing").get("rushing_td") > 0:
                rush_per_touchdown = round((
                    player.get("stats").get("rushing").get("rushing_att") /
                    player.get("stats").get("rushing").get("rushing_td")
                ), 2)

                yards_per_rush = round((
                    player.get("stats").get("rushing").get("rushing_yds") /
                    player.get("stats").get("rushing").get("rushing_att")
                ), 2)

            if total_att > 0 and total_td > 0:
                att_per_game = round((total_att/player.get("games_played")), 2)

                points_per_att = round((points/total_att), 2)

                att_per_td = round((total_att/total_td), 2)

            quarterbacks.append({
                "name": player.get("player_name"),
                "team": player.get("team"),
                "ints": player.get("stats").get("passing").get("int"),
                "fumbs": player.get("fumbles_lost"),
                "rush_atts": player.get("stats").get(
                    "rushing").get("rushing_att"),
                "rush_yards": player.get("stats").get(
                    "rushing").get("rushing_yds"),
                "rush_tds": player.get("stats").get("rushing").get("rushing_td"),
                "pass_atts": player.get("stats").get(
                    "passing").get("passing_att"),
                "pass_comps": player.get("stats").get("passing").get("passing_cmp"),
                "comp_perc": completion_percentage,
                "pass_yards": player.get("stats").get(
                    "passing").get("passing_yds"),
                "pass_tds": player.get("stats").get("passing").get("passing_td"),
                "total_tds": total_td,
                "games": player.get("games_played"),
                "points": points,
                "points_per_game": points_per_game,
                "pass_per_td": pass_per_touchdown,
                "yards_per_pass": yards_per_pass,
                "yards_per_comp": yards_per_comp,
                "rush_per_td": rush_per_touchdown,
                "yards_per_rush": yards_per_rush,
                "total_att": total_att,
                "att_per_game": att_per_game,
                "points_per_att": points_per_att,
                "att_per_td": att_per_td
            })

    starting_qbs = quarterbacks[0:30]
    qb_points = [player.get("points") for player in starting_qbs]
    avg_vor = sum(qb_points)/len(qb_points)
    starting_vor = quarterbacks[20]["points"]

    for quarterback in starting_qbs:
        quarterback["avg_vor"] = round((quarterback["points"] - avg_vor), 2)
        quarterback["starting_vor"] = round(
            (quarterback["points"] - starting_vor), 2)

""" Clear all data and creates quarterbacks """
MODE_REFRESH = 'refresh'

""" Clear all data and do not create any object """
MODE_CLEAR = 'clear'


class Command(BaseCommand):
    help = "seed database for testing and development."

    def add_arguments(self, parser):
        parser.add_argument('--mode', type=str, help="Mode")

    def handle(self, *args, **options):
        self.stdout.write('seeding data...')
        run_seed(self, options['mode'])
        self.stdout.write('done.')


def clear_data():
    """Deletes all the table data"""
    Quarterback.objects.all().delete()


def create_quarterback(quarterback):
    """Creates an quarterback object combining different elements from the list"""

    quarterback = Quarterback(
        name=quarterback["name"],
        team=quarterback["team"],
        ints=quarterback["ints"],
        fumbs=quarterback["fumbs"],
        rush_atts=quarterback["rush_atts"],
        rush_yards=quarterback["rush_yards"],
        rush_tds=quarterback["rush_tds"],
        pass_atts=quarterback["pass_atts"],
        pass_comps=quarterback["pass_comps"],
        comp_perc=quarterback["comp_perc"],
        pass_yards=quarterback["pass_yards"],
        pass_tds=quarterback["pass_tds"],
        total_tds=quarterback["total_tds"],
        games=quarterback["games"],
        points=quarterback["points"],
        points_per_game=quarterback["points_per_game"],
        pass_per_td=quarterback["pass_per_td"],
        yards_per_pass=quarterback["yards_per_pass"],
        yards_per_comp=quarterback["yards_per_comp"],
        rush_per_td=quarterback["rush_per_td"],
        yards_per_rush=quarterback["yards_per_rush"],
        total_att=quarterback["total_att"],
        att_per_game=quarterback["att_per_game"],
        points_per_att=quarterback["points_per_att"],
        att_per_td=quarterback["att_per_td"],
        avg_vor=quarterback["avg_vor"],
        starting_vor=quarterback["starting_vor"]
    )
    quarterback.save()
    return quarterback


def run_seed(self, mode):
    """ Seed database based on mode

    :param mode: refresh / clear 
    :return:
    """
    # Clear data from tables
    clear_data()
    if mode == MODE_CLEAR:
        return

    for quarterback in starting_qbs:
        create_quarterback(quarterback)
