from rest_framework import serializers
from .models import Quarterback


class QuarterbackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Quarterback
        fields = ("id", "name", "team", "ints", "fumbs", "rush_atts", "rush_yards",
                  "rush_tds", "pass_atts", "pass_comps", "pass_yards", "pass_tds", "games")
