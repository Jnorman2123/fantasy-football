from django.db import models

# Create your models here.


class Quarterback(models.Model):
    name = models.CharField(max_length=50)
    team = models.CharField(max_length=50)
    ints = models.IntegerField()
    fumbs = models.IntegerField()
    rush_atts = models.IntegerField()
    rush_yards = models.IntegerField()
    rush_tds = models.IntegerField()
    pass_atts = models.IntegerField()
    pass_comps = models.IntegerField()
    comp_perc = models.FloatField()
    pass_yards = models.IntegerField()
    pass_tds = models.IntegerField()
    total_tds = models.IntegerField()
    games = models.IntegerField()
    points = models.FloatField()
    points_per_game = models.FloatField()
    pass_per_td = models.FloatField()
    yards_per_pass = models.FloatField()
    yards_per_comp = models.FloatField()
    rush_per_td = models.FloatField()
    yards_per_rush = models.FloatField()
    total_att = models.IntegerField()
    att_per_game = models.FloatField()
    points_per_att = models.FloatField()
    att_per_td = models.FloatField()
    avg_vor = models.FloatField()
    starting_vor = models.FloatField()
