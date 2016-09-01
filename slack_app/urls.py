from django.conf.urls import url
from . import views
from django.views.generic.edit import CreateView
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.views import login, logout

# app_name = 'slack_app'

urlpatterns = [
    url(r'^login/index/$', views.index, name='index'),
    url(r'^register/$', CreateView.as_view(
            template_name='registration/register.html',
            form_class=UserCreationForm,
            success_url='/'),
            name='register'),
    url(r'^$', views.question, name='question'),
    url(r'^question/(?P<question_id>[0-9]+)$', views.answer, name='question_detail_page'),
    url(r'^accounts/profile/$', views.question, name='question'),
    url(r'^accounts/login/$', login, name='login'),
    url(r'^login/$', login, name='login'),
    url(r'^logout/$', logout, {'next_page': '/login'}, name='logout'),
    url(r'^search/$', views.search, name='search'),

    ]
