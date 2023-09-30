from PIL import Image

input_image = Image.open('cat.png')

icon16 = input_image.resize((16, 16), Image.ANTIALIAS)
icon16.save('icon16.png')

icon48 = input_image.resize((48, 48), Image.ANTIALIAS)
icon48.save('icon48.png')

icon128 = input_image.resize((128, 128), Image.ANTIALIAS)
icon128.save('icon128.png')