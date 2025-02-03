from django.shortcuts import render,redirect
from django.http import HttpResponseRedirect
from django.urls import reverse
from django import forms
from django.contrib import messages


class NewTaskForm(forms.Form):
    task = forms.CharField(label="New Task")
    
    
# Create your views here.
def index(request):
    if "tasks" not in request.session:
        request.session["tasks"] = []
    return render(request, "tasks/index.html", {
        "tasks": request.session["tasks"]
    })
    
def add(request):
    if request.method == "POST":
        form = NewTaskForm(request.POST)
        if form.is_valid():
            task = form.cleaned_data["task"]
            request.session["tasks"] += [task]
            return HttpResponseRedirect(reverse("tasks:index"))
        else:
            return render(request, "tasks/add.html",{
                "form": form
            })
    return render(request, "tasks/add.html", {
        "form": NewTaskForm()
    })
    
    
def clear_tasks(request):
    request.session["tasks"] = []
    messages.success(request, "Task list has been cleared.")
    return HttpResponseRedirect(reverse("tasks:index"))
   