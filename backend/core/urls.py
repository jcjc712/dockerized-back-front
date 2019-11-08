"""core URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.conf.urls import include, url
from check_list.views import CheckListViewSet
from rest_framework.routers import DefaultRouter
from rest_framework_jwt.views import obtain_jwt_token
from .views import current_user, UserList

router = DefaultRouter()
router.register(r'check_list', CheckListViewSet)

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^api/', include(router.urls)),
    url(r'^api-token-auth/', obtain_jwt_token),
    url(r'^current_user/', current_user),
    url(r'^users/', UserList.as_view())
]
