from __future__ import unicode_literals
from django.db import migrations
from django.contrib.auth import get_user_model

import csv


def load_data(apps, schema_editor):
    Comment = apps.get_model('slack_app', 'Comment')

    with open('comments.txt') as comments:
        reader = csv.reader(comments, delimiter='+')
        tempid = 0
        for row in reader:
            tempid += 1
            temp_comments = Comment(id=tempid, comment_text=row[0], answer_id=row[1], user_id=row[2])
            temp_comments.save()
            # temp_comments.users.add(user=int(row[2]))
            # temp_comments.save()

class Migration(migrations.Migration):

    dependencies = [
        ('slack_app', '0003_auto_20160831_0007'),
    ]

    operations = [
        migrations.RunPython(load_data)
    ]
