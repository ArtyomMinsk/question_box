from django.db import models
from django.contrib.auth.models import User


class Question(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    tags = models.CharField(max_length=50)
    user = models.ForeignKey(User)


class Answer(models.Model):
    answer_text = models.TextField()
    user_vote = models.IntegerField()
    question = models.ForeignKey(Question)
    user = models.ForeignKey(User)


class Comment(models.Model):
    answer = models.ForeignKey(Answer)
    user = models.ForeignKey(User)
    comment_text = models.TextField()

    # def calculate_score(self):
    #     self.user_vote.all()
    #     self.user_vote.all().filter
