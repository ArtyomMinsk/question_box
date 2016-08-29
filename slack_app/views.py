from django.shortcuts import render
from .serializers import QuestionSerializer, AnswerSerializer, CommentSerializer
from rest_framework import viewsets
from django.contrib.auth.decorators import login_required
from django.http import HttpResponse
from .models import Question, Answer, Comment


# @login_required
def index(request):
    return HttpResponse('hello bitches')


class QuestionViewSet(viewsets.ModelViewSet):
    serializer_class = QuestionSerializer
    queryset = Question.objects.all().order_by('title')
