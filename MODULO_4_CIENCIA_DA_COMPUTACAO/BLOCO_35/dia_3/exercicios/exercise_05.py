from abc import ABC, abstractmethod


class PngInterface(ABC):
    @abstractmethod
    def draw(self):
        raise NotImplementedError


class PngImage(PngInterface):
    def __init__(self, png_path):
        self.png_path = png_path
        self.format = "raster"

    def draw(self):
        print(f"Drawing PNG {self.png_path} with {self.format}")


class SvgImage:
    def __init__(self, svg_path):
        self.svg_path = svg_path
        self.format = "vector"

    def get_image(self):
        return f"SVG {self.svg_path} with {self.format}"


class SvgAdapter:
    def __init__(self, svg_image):
        self.svg_image = svg_image

    def draw(self):
        print(f"Drawing {self.svg_image.get_image()}")


if __name__ == "__main__":
    png_image = PngImage("/path/to/png")
    png_image.draw()

    svg_image = SvgImage("/path/to/svg")
    svg_adapter = SvgAdapter(svg_image)
    svg_adapter.draw()
