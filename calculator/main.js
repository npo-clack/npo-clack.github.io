function keisann() {
    const abc = document.getElementById("buttonA");
    for (i = 0; i < 10; i++) {
        const buttonB = document.createElement(`button`);
        abc.appendChild(buttonB);
        buttonB.innerText += i
    };
    const Enter = document.createElement(`button`)
    Enter.innerText = '='
    abc.appendChild(Enter)

    const a = document.createElement(`button`)
    a.innerText = '＋'
    abc.appendChild(a)

    const b = document.createElement(`button`)
    b.innerText = '-'
    abc.appendChild(b)

    const c = document.createElement(`button`)
    c.innerText = '×'
    abc.appendChild(c)

    const d = document.createElement(`button`)
    d.innerText = '÷'
    abc.appendChild(d)

    const e = document.createElement(`button`)
    e.innerText = '.'
    abc.appendChild(e)

    const Delete = document.createElement(`button`)
    Delete.innerText = 'CE'
    abc.appendChild(Delete)

    const AllDelete = document.createElement(`button`)
    AllDelete.innerText = 'AC'
    abc.appendChild(AllDelete)


};
keisann();

let inputKeys = ``;
function showExeCount(event) {
    let inputKey;
    if (event.key) {
        inputKey = event.key;
    } else {
        inputKey = event.target.innerText
    };


    if (inputKey === "=" || inputKey == "Enter") {

        let inputNums = inputKeys.split(/×|÷|＋|-/);

        // inputNums = inputNums.map(Number);
        inputNums = inputNums.map(parseFloat);
        let kigo = inputKeys.split(/[0-9]+/);
        let i = 0;
        while (i <= kigo.length) {
            if (kigo[i] === "×") {
                let aiueo = inputNums[i - 1] * inputNums[i];

                inputNums.splice(i - 1, 1, aiueo);
                inputNums.splice(i, 1);
                kigo.splice(i, 1);
            } else if (kigo[i] === ".") {
                kigo.splice(i, 1);
            } else {
                if (kigo[i] === "÷") {
                    let aiueo = inputNums[i - 1] / inputNums[i];

                    inputNums.splice(i - 1, 1, aiueo);
                    inputNums.splice(i, 1);
                    kigo.splice(i, 1);
                } else {
                    i = i + 1;
                }
            }
        }
        i = 0;
        while (i <= kigo.length) {
            if (kigo[i] === "＋") {
                let aiueo = inputNums[i - 1] + inputNums[i];
                inputNums.splice(i - 1, 1, aiueo);
                inputNums.splice(i, 1);
                kigo.splice(i, 1);
            }else if (kigo[i] === ".") {
                kigo.splice(i, 1);
             } else {
                if (kigo[i] === "-") {
                    let aiueo = inputNums[i - 1] - inputNums[i];
                    inputNums.splice(i - 1, 1, aiueo);
                    inputNums.splice(i, 1);
                    kigo.splice(i, 1);
                } else {
                    i = i + 1;
                }
            }
        }
        let result = inputNums[0].toFixed(6)
        alert(Number(result));
    } else {
        if (inputKey == "Delete" || inputKey == "Backspace" || inputKey == "CE") {
            inputKeys = inputKeys.substring(0, inputKeys.length - 1);
        } else if (inputKey != "0" && inputKey != "1" &&inputKey != "2" &&inputKey != "3" &&inputKey != "4" &&inputKey != "5" &&inputKey != "6" &&inputKey != "7" &&inputKey != "8" &&inputKey != "9" && inputKey != "Ennter" &&inputKey != "Delete" && inputKey != "＋" &&inputKey != "-" &&inputKey != "×" &&inputKey != "÷" &&  inputKey != "." && inputKey!="AC") {
            return;
        } else if (inputKey == "AC") {
            inputKeys = inputKeys.substring(0, inputKeys.length - inputKeys.length);
        } else if (!inputKey) {
            return
        } else {
            inputKeys += inputKey;
        }


    }



    document.getElementById("keyboardinput").innerText = inputKeys
}


document.onkeydown = showExeCount
document.getElementById("buttonA").onclick = showExeCount

