# store/management/commands/seed_products.py
from django.core.management.base import BaseCommand
from store.models import Product


class Command(BaseCommand):
    help = 'Seed the database with initial products'

    def handle(self, *args, **kwargs):
        if Product.objects.exists():
            self.stdout.write(self.style.WARNING("Products already exist. Aborting."))
            return

        products = [
            {
                "name": "Classic T-Shirt",
                "description": "Comfortable cotton t-shirt for everyday wear.",
                "price": 19.99,
                "image": "https://picsum.photos/id/1011/300/300",
            },
            {
                "name": "Denim Jeans",
                "description": "Slim-fit jeans made from premium denim.",
                "price": 49.99,
                "image": "https://picsum.photos/id/1027/300/300",
            },
            {
                "name": "Hooded Sweatshirt",
                "description": "Cozy fleece-lined hoodie for colder days.",
                "price": 39.99,
                "image": "https://picsum.photos/id/1005/300/300",
            },
            {
                "name": "Canvas Sneakers",
                "description": "Durable and stylish canvas sneakers.",
                "price": 59.99,
                "image": "https://picsum.photos/id/1010/300/300",
            },
            {
                "name": "Leather Belt",
                "description": "Classic leather belt with silver buckle.",
                "price": 24.99,
                "image": "https://picsum.photos/id/1051/300/300",
            },
            {
                "name": "Baseball Cap",
                "description": "Adjustable cotton cap with embroidered logo.",
                "price": 14.99,
                "image": "https://picsum.photos/id/1040/300/300",
            },
            {
                "name": "Sunglasses",
                "description": "Polarized sunglasses with UV protection.",
                "price": 29.99,
                "image": "https://picsum.photos/id/1021/300/300",
            },
            {
                "name": "Digital Watch",
                "description": "Water-resistant digital watch with stopwatch.",
                "price": 89.99,
                "image": "https://picsum.photos/id/1002/300/300",
            },
            {
                "name": "Backpack",
                "description": "Spacious and durable backpack with laptop sleeve.",
                "price": 69.99,
                "image": "https://picsum.photos/id/1001/300/300",
            },
            {
                "name": "Graphic Tee",
                "description": "T-shirt featuring a bold, unique graphic design.",
                "price": 21.99,
                "image": "https://picsum.photos/id/1035/300/300",
            },
            {
                "name": "Running Shorts",
                "description": "Breathable athletic shorts with mesh lining.",
                "price": 27.99,
                "image": "https://picsum.photos/id/1025/300/300",
            },
            {
                "name": "Track Jacket",
                "description": "Stylish track jacket with zip closure.",
                "price": 54.99,
                "image": "https://picsum.photos/id/1033/300/300",
            },
            {
                "name": "Wool Beanie",
                "description": "Warm wool beanie for cold weather.",
                "price": 17.99,
                "image": "https://picsum.photos/id/1012/300/300",
            },
            {
                "name": "Corduroy Pants",
                "description": "Retro-style pants made from soft corduroy.",
                "price": 59.99,
                "image": "https://picsum.photos/id/1020/300/300",
            },
            {
                "name": "Plaid Shirt",
                "description": "Button-up shirt with a classic plaid pattern.",
                "price": 34.99,
                "image": "https://picsum.photos/id/1062/300/300",
            },
            {
                "name": "Ankle Boots",
                "description": "Leather ankle boots with rugged sole.",
                "price": 84.99,
                "image": "https://picsum.photos/id/1041/300/300",
            },
            {
                "name": "Tank Top",
                "description": "Sleeveless tank top ideal for hot days.",
                "price": 15.99,
                "image": "https://picsum.photos/id/1076/300/300",
            },
            {
                "name": "Wristband",
                "description": "Sweat-absorbing wristband for workouts.",
                "price": 9.99,
                "image": "https://picsum.photos/id/1023/300/300",
            },
            {
                "name": "Flip-Flops",
                "description": "Lightweight flip-flops for beach or pool.",
                "price": 12.99,
                "image": "https://picsum.photos/id/1008/300/300",
            },
            {
                "name": "Pullover Sweater",
                "description": "Soft knit pullover for chilly evenings.",
                "price": 44.99,
                "image": "https://picsum.photos/id/1006/300/300",
            },
        ]

        for p in products:
            Product.objects.create(**p)

        self.stdout.write(self.style.SUCCESS("Successfully seeded 20 products."))
