# Generated by Django 3.2.19 on 2023-05-11 13:45

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('ecom', '0002_alter_custom_color'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='custom',
            name='color',
        ),
    ]
