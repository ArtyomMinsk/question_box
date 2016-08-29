from django.conf.urls import url, include
from rest_framework import routers
from not_trello import views
from django.contrib import admin

router = routers.DefaultRouter()
router.register(r'', views.ViewSet)
router.register(r'', views.ViewSet)
router.register(r'', views.ViewSet)

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^', include('slack_app.urls')),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    url(r'^api/', include(router.urls))
    ]
