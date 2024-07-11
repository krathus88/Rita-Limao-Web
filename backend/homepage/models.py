from django.db import models


# Create your models here.
class Jumbotron(models.Model):
    title = models.CharField(max_length=50)
    description = models.TextField(null=True, blank=True)
    video_source = models.CharField(max_length=255)
    display_order = models.IntegerField(db_index=True)

    def __str__(self):
        return self.title


class Card(models.Model):
    title = models.CharField(max_length=50)
    subtitle = models.CharField(max_length=50, null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    image_source = models.CharField(max_length=255)
    link = models.CharField(max_length=255, null=True, blank=True)
    display_order = models.IntegerField(db_index=True)

    def __str__(self):
        if self.subtitle:
            return f"{self.title} - {self.subtitle}"
        else:
            return self.title
