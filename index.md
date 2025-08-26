<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MichelVilleneuve's Projects</title>
    <style>
        body {
            font-family: sans-serif;
            margin: 0;
            padding: 20px;
            background-color: #f4f4f4;
            color: #333;
        }

        .gallery-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center; /* Center items horizontally */
            gap: 20px;
            max-width: 960px; /* Limit the width of the gallery */
            margin: 0 auto; /* Center the gallery on the page */
        }

        .gallery-item {
            text-align: center;
            width: 180px; /* Slightly larger for better spacing */
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            padding: 10px;
        }

        .gallery-item img {
            max-width: 100%;
            height: auto;
            display: block;
            margin: 0 auto;
            border-radius: 5px;
            transition: transform 0.3s ease; /* Add a smooth transition */
        }

        .gallery-item img: hover {
            transform: scale(1.05); /* Slightly zoom on hover */
        }

        .gallery-item a {
            text-decoration: none;
            colour: inherit;
        }

        .gallery-item figcaption {
            margin-top: 10px;
            font-size: 1em;
            color: #555;
        }

        /* Responsive adjustments */
        @media (max-width: 600px) {
            .gallery-container {
                justify-content: flex-start; /* Left align on smaller screens */
            }
            .gallery-item {
                width: 100%; /* Full width on small screens */
            }
        }
    </style>
</head>
<body>
    <h1>MichelVilleneuve's Projects</h1>
    <p>A collection of interactive tools and applications.</p>

    <div class="gallery-container">
        <figure class="gallery-item">
            <a href="https://michelvilleneuve.github.io/">
                <img src="Images/CalcConv.jpg" alt="CalcConv">
                <figcaption>CalcConv</figcaption>
            </a>
        </figure>

        <figure class="gallery-item">
            <a href="https://michelvilleneuve.github.io/">
                <img src="Images/UnitsCalculator.jpg" alt="UnitsCalculator">
                <figcaption>UnitsCalculator</figcaption>
            </a>
        </figure>

        <figure class="gallery-item">
            <a href="https://michelvilleneuve.github.io/">
                <img src="Images/FieldCAD.jpg" alt="FieldCAD">
                <figcaption>FieldCAD</figcaption>
            </a>
        </figure>

        <figure class="gallery-item">
            <a href="https://michelvilleneuve.github.io/">
                <img src="Images/NotePad.jpg" alt="NotePad">
                <figcaption>NotePad</figcaption>
            </a>
        </figure>

        <figure class="gallery-item">
            <a href="https://michelvilleneuve.github.io/">
                <img src="Images/FlowChart.jpg" alt="FlowChart">
                <figcaption>FlowChart</figcaption>
            </a>
        </figure>

        <figure class="gallery-item">
            <a href="https://michelvilleneuve.github.io/">
                <img src="Images/BrushDraw.png" alt="BrushDraw">
                <figcaption>BrushDraw</figcaption>
            </a>
        </figure>

        <figure class="gallery-item">
            <a href="https://michelvilleneuve.github.io/">
                <img src="Images/CyclingTracker.png" alt="CyclingTracker">
                <figcaption>CyclingTracker</figcaption>
            </a>
        </figure>
    </div>

</body>
</html>
