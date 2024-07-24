from django.db import models


# Create your models here.
class Portfolio(models.Model):
    img_source = models.CharField(max_length=255)
    display_order = models.IntegerField(db_index=True)

    def __str__(self):
        return "Img n." + self.display_order
