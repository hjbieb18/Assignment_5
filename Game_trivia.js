<!DOCTYPE html>
<html lang="en">

    <head>

        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="">
        <meta name="author" content="">

        <title>Game Triva</title>

        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
        <link rel="stylesheet" href="./assets/css/style.css">
    </head>


    <body>

        <div class="container">
            <div class="header text-center clearfix">
                <h1 class="text-muted">Trivia game</h1>
            </div>
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <div id="game">
                        <h2>Trivia Game</h2>
                        <p id= "question" class="lead"></p>
                    </div>
                    <div id="results">
                    </div>
                </div>

                <div class="row">
                    <div id="choices" class="text-center">
                        <button id="start" class="btn btn-info btn-lg">Start Game</button>
                        <div id="options">

                        </div>
                    </div>
                </div>
            </div>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
    </body>
</html>
