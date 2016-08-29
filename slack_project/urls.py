from django.conf.urls import url, include
from rest_framework import routers
from slack_app import views
from django.contrib import admin

router = routers.DefaultRouter()
router.register(r'Question', views.QuestionViewSet)
# router.register(r'Answer', views.AnswerViewSet)
# router.register(r'Comment', views.CommentViewSet)

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^', include('slack_app.urls')),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    url(r'^api/', include(router.urls))
    ]
