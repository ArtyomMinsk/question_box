from __future__ import unicode_literals
from django.db import migrations
from django.contrib.auth import get_user_model

import csv


def load_data(apps, schema_editor):
    # Question = apps.get_model('slack_app', 'Question')
    Answer = apps.get_model('slack_app', 'Answer')

    with open('answers.txt') as answers:
        reader = csv.reader(answers, delimiter='+')
        tempid = 0
        for row in reader:
            tempid += 1
            temp_answer = Answer(id=tempid, answer_text=row[0], question_id=int(row[1]), user_up_vote=int(row[2]), user_down_vote=int(row[3]), user_id=row[4])
            temp_answer.save()
            # temp_answer.users.add(int(row[4]))
            # temp_answer.save()

class Migration(migrations.Migration):

    dependencies = [
        ('slack_app', '0002_auto_20160830_2158'),
    ]

    operations = [
        migrations.RunPython(load_data)
    ]
