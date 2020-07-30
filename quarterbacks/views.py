from .models import Quarterback
from .serializers import QuarterbackSerializer
from rest_framework import generics

# Create your views here.


class QuarterbackListCreate(generics.ListCreateAPIView):
    queryset = Quarterback.objects.all()
    serializer_class = QuarterbackSerializer


# Create your views here.
