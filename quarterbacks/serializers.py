from rest_framework import serializers
from .models import Quarterback


class QuarterbackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Quarterback
        fields = ("id", "name", "team", "ints", "fumbs", "rush_atts", "rush_yards",
                  "rush_tds", "pass_atts", "pass_comps", "comp_perc", "pass_yards",
                  "pass_tds", "total_tds", "games", "points", "points_per_game",
                  "pass_per_td", "yards_per_pass", "yards_per_comp", "rush_per_td",
                  "yards_per_rush", "total_att", "att_per_game", "points_per_att",
                  "att_per_td", "avg_vor", "starting_vor")
