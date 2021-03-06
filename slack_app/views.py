from django.shortcuts import render
from .serializers import QuestionSerializer, AnswerSerializer, CommentSerializer
from rest_framework import viewsets
from django.contrib.auth.decorators import login_required
from django.http import HttpResponse, HttpResponseRedirect
from .models import Question, Answer, Comment
from django.contrib.auth.views import login


# @login_required
def index(request):
    return HttpResponse('sup DAWG')


def custom_login(request):
    if request.user.is_authenticated():
        return HttpResponseRedirect('/')
    else:
        return login(request)


def question(request):
    return render(request, 'slack_app/question.html')


@login_required
def answer(request, question_id):
    context = {
        'question_id': question_id,
    }
    return render(request, 'slack_app/question_answer.html', context)


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
    queryset = Question.objects.all().order_by('id')


class AnswerViewSet(viewsets.ModelViewSet):
    serializer_class = AnswerSerializer
    queryset = Answer.objects.all()
