# Generated by Django 4.2.4 on 2023-08-18 13:17

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('general', '0004_delete_purchase'),
    ]

    operations = [
        migrations.CreateModel(
            name='GuestCategoryPrice',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('price', models.DecimalField(decimal_places=2, max_digits=10)),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='general.category')),
            ],
        ),
    ]
