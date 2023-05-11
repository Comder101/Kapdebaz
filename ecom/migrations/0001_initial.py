# Generated by Django 3.2.19 on 2023-05-11 13:10

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='custom',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('lowertext', models.CharField(default='fruits', max_length=50)),
                ('uppertext', models.CharField(default='fruits', max_length=50)),
                ('color', models.CharField(blank=True, default='', max_length=10, null=True)),
            ],
        ),
    ]