from django.db import models
from django.contrib.auth.models import User


class Question(models.Model):
    title = models.CharField(max_length=200)
    question_text = models.CharField(max_length=5000)
    tag = models.CharField(max_length=100)
    comment = models.CharField(max_length=100)
    user = models.ForeignKey(User)


class Answer(models.Model):
    question = models.ForeignKey(Question)
    question_text = models.CharField(max_length=5000)
    score = models.IntegerField()
    comment = models.CharField(max_length=100)
    user = models.ForeignKey(User)

class User(models.Model):
    score = models.IntegerField()





#
# class Board(models.Model):
#     name = models.CharField(max_length=50)
#     users = models.ManyToManyField(User)
#
#
# class Status(models.Model):
#     name = models.CharField(max_length=20)
#     order = models.IntegerField()
#
#
# class Task(models.Model):
#     user_story = models.TextField()
#     weight = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(21)])
#     board = models.ForeignKey(Board)
#     status = models.ForeignKey(Status)
