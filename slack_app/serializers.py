from rest_framework import serializers
from .models import *


class *Serializer(serializers.ModelSerializer):
    class Meta:
        model = *
        fields = (*,)
        # 'status', 'who_created', 'when_created', 'who_editied', 'when_edited'
