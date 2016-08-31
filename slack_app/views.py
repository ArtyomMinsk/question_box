from django.shortcuts import render
from .serializers import QuestionSerializer, AnswerSerializer, CommentSerializer
from rest_framework import viewsets
from django.contrib.auth.decorators import login_required
from django.http import HttpResponse
from .models import Question, Answer, Comment


# @login_required
def index(request):
    return HttpResponse('sup DAWG')


def question(request):
    return render(request, 'slack_app/question.html')


def search(request):
    return render(request, 'slack_app/search.html')


def QuestionList(request):
    q_id = request.GET.get('id')
    title = request.GET.get('title')  # <--- you could add a default if needed ('title', 'DEFAULT VAL')
    tags = request.GET.get('tags')
    sort = request.GET.get('sort') # GET QUERYSET !!

    if q_id is not None:
        these_questions = Question.objects.filter(id=int(q_id))
    elif tags is not None:
        these_questions = Question.objects.filter(title__iexact=title)
    elif tags is not None:
        these_questions = Question.objects.filter(tags=tags)
    elif sort is not None:
        these_questions = Question.objects.order_by(sort)

    context = {'these_questions': these_questions}
    return render(request, 'slack_app/search.html', context)


class QuestionViewSet(viewsets.ModelViewSet):
    serializer_class = QuestionSerializer
    queryset = Question.objects.all().order_by('title')
