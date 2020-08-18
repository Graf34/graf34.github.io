<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="/assets/css/style.css">
    <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600&display=swap" rel="stylesheet">
</head>
<body>
    <div class="content">
    <header>
        <button><</button>
        <h2>Редактор шапки</h2>
    </header>
    <div class="editor">
        <canvas id="canvas" width="795" height="200"></canvas>
        <script src="/assets/js/main.js"></script>
        <div id="0" onclick="userEd=0; selectUser(0);" style="border-right-width: 2px;" class="user selected">
            <h2>1 место</h2>
            <img src="http://via.placeholder.com/100x100" alt=""><br>
            <span id="s0t">Размер (NN)</span><br>
            <input type="range" onchange="setSize('s0');" min="30" value="80" max="180" name="" id="s0"><br>
            <span id="r0t">Округлить (NN%)</span><br>
            <input type="range" onchange="setRound('r0');" value="50" min="0" max="50" name="" id="r0"><br>
            <span>X</span><input oninput="x0 = this.value;" id="x0"value=0 type="text">
            <span>Y</span><input oninput="y0 = this.value;" id="y0"value=0 type="text">
        </div>
        
        <div id="1" onclick="userEd=1; selectUser(1);" style="border-left-width: 2px;border-right-width: 2px;" class="user">
        <h2>2 место</h2>
            <img src="http://via.placeholder.com/100x100" alt=""><br>
            <span id="s1t">Размер (NN)</span><br>
            <input type="range" onchange="setSize('s1');" min="30" value="80" max="180" name="" id="s1"><br>
            <span id="r1t">Округлить (NN%)</span><br>
            <input type="range" onchange="setRound('r1');" value="50" min="0" max="50" name="" id="r1"><br>
            <span>X</span><input oninput="x1 = this.value;" id="x1"value=0 type="text">
            <span>Y</span><input oninput="y1 = this.value;" id="y1"value=0 type="text">
    </div>
        <div id="2" onclick="userEd=2; selectUser(2);" style="border-left-width: 2px;" class="user">
        <h2>3 место</h2>
            <img src="http://via.placeholder.com/100x100" alt=""><br>
            <span id="s2t">Размер (NN)</span><br>
            <input type="range" onchange="setSize('s2');" min="30" value="80" max="180" name="" id="s2"><br>
            <span id="r2t">Округлить (NN%)</span><br>
            <input type="range" onchange="setRound('r2');" value="50" min="0" max="50" name="" id="r2"><br>
            <span>X</span><input value=0 id="x2" type="text">
            <span>Y</span><input value=0 id="y2" type="text">
    </div>
        <input type="text" id="url" placeholder="url фонового изображения">
        <input onclick="bg.src=document.getElementById('url').value;" type="submit" value="Добавить">
        <input type="submit" value="Сохранить">
        </div>

        

    </div>

    
</body>
</html>