function add() {
    var a, b, c;
    a = Number(document.getElementById('num1').value);
    b = Number(document.getElementById('num2').value);
    c = a + b;
    document.getElementById("ans").value = c;
}

function swap()
{
    var a,b,c;
    a = Number(document.getElementById('no1').value);
    b = Number(document.getElementById('no2').value);
    c = a;
    a = b;
    b = c;
    document.getElementById("n1").value = a;
    document.getElementById("n2").value = b;
}

function oddeven()
{
    var no;
    no = Number(document.getElementById("no").value);
    if(no%2==0){
        alert("No is Even");
    }
    else{
        alert("No is odd");
    }
}

function myMarks(){
    var name, lname, insname, batch;
    var tcs, cn, wdl, iloc, bce, dbms;
    var total, percent, grade;

    name =  document.getElementById("name").value;
    lname =  document.getElementById("lname").value;
    insname =  document.getElementById("insname").value;
    batch =  document.getElementById("batch").value;

    tcs = Number(document.getElementById('tcs').value);
    wdl = Number(document.getElementById('wdl').value);
    iloc = Number(document.getElementById('iloc').value);
    bce = Number(document.getElementById('bce').value);
    dbms = Number(document.getElementById('dbms').value);
    cn = Number(document.getElementById('cn').value);

    total = tcs + wdl + iloc + bce + dbms + cn;

    percent = (total/600)*100;

    document.getElementById("total").innerHTML = total;
    document.getElementById("percent").innerHTML = percent.toFixed(2)+"%";

    switch(true)
    {
        case(percent>=80):
        document.getElementById("grade").innerHTML="A+";
        break;
        case(percent>=70):
        document.getElementById("grade").innerHTML="A";
        break;
        case(percent>=60):
        document.getElementById("grade").innerHTML="B";
        break;
        case(percent>=50):
        document.getElementById("grade").innerHTML="C";
        break;
        case(percent>=40):
        document.getElementById("grade").innerHTML="D";
        break;
        case(percent>=30):
        document.getElementById("grade").innerHTML="Fail";
        break;
    }
}