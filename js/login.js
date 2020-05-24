let pass="";
let n= "";
let x= "";
var retiro =  0 ;
var dinero = 7777;

function login(numero) {
        pass += numero;

        document.getElementById("pass").value = pass;
            
    }        

function validar() {
     pass =+ document.getElementById('pass').value;
       
    if ( pass === 1 && document.getElementById('pantalla2').style.display == 'none' && document.getElementById('pantalla3').style.display == 'none' && document.getElementById('pantalla4').style.display == 'none' && document.getElementById('pantalla5').style.display == 'none'  ) {
        document.getElementById('pantalla1').style.display='none';
        document.getElementById('pantalla2').style.display='block';
        
        
       
    }else{
       
        limpiar();
        document.getElementById('mensaje').style.display="block";

    }
    }
function limpiar() {
    pass="";
    document.getElementById("pass").value="";
    }
function ing_retiro(numero) {
     
    if (numero === '1' && document.getElementById('pantalla2').style.display == 'block'   ) {
        document.getElementById('pantalla2').style.display='none';
        document.getElementById('pantalla3').style.display='block';
        document.getElementById('bot').style.display = 'block';
        document.getElementById('bot1').style.display = 'none';  
        }
        
    
    
    }
function soles(numero) {
    if (numero == '1' && document.getElementById('pantalla3').style.display == 'block' )  {
    
    document.getElementById('pantalla4').style.display = 'block';
    document.getElementById('pantalla1').style.display = 'none';
    document.getElementById('pantalla2').style.display = 'none';
    document.getElementById('pantalla3').style.display = 'none';
    }
    }
function otras(numero) {
    if (numero == '1' && document.getElementById('pantalla4').style.display == 'block' ) {
        document.getElementById('bo3').style.display = 'none';
        document.getElementById('bo31').style.display = 'block';
        document.getElementById('pantalla4').style.display = 'none';
        document.getElementById('pantalla5').style.display = 'block';
        document.getElementById('n1').style.display = 'none';
        document.getElementById('n2').style.display = 'none';
        document.getElementById('n3').style.display = 'none';
        document.getElementById('n4').style.display = 'none';
        document.getElementById('n5').style.display = 'none';
        document.getElementById('n6').style.display = 'none';
        document.getElementById('n7').style.display = 'none';
        document.getElementById('n8').style.display = 'none';
        document.getElementById('n9').style.display = 'none';
        document.getElementById('n10').style.display = 'none';
        document.getElementById('n11').style.display = 'none';
        document.getElementById('n121').style.display = 'none';
        document.getElementById('b1').style.display = 'block';
        document.getElementById('b2').style.display = 'block';
        document.getElementById('b3').style.display = 'block';
        document.getElementById('b4').style.display = 'block';
        document.getElementById('mensaje3.1').style.display = 'none';
        document.getElementById('bo1').style.display = 'block';
               limpiar();
       


    }
    }

    function retiroso(num) {
    n += num;           
         document.getElementById('retiro').value = n;                      
    }
        
    function val(num) {
        n = parseInt(document.getElementById('retiro').value);
         
    if (num == 1 && document.getElementById('pantalla5').style.display == 'block'  ) {
            
    if ( n % 10 == 0) {
                
        document.getElementById('pantalla5').style.display = 'none';
        document.getElementById('pantalla6').style.display = 'block';
        document.getElementById('bo11').style.display = 'block';
        document.getElementById('bo1').style.display = 'none';
        retiro += parseInt(n);
        document.getElementById('bo2').style.display = 'none';
        document.getElementById('bo21').style.display = 'block';

         limpiar2(); 
    }else{
        document.getElementById('mensaje3.1').style.display = 'block';
        limpiar2(); 
    }
    }
    }
    function limpiar2() {
        n = "";
        document.getElementById('retiro').value = "";
    }
    function siono(num) {
       
        if (num == 1 && document.getElementById('pantalla5').style.display == 'none') {
        
        document.getElementById('pantalla5').style.display = 'block';
        document.getElementById('pantalla6').style.display = 'none';
        document.getElementById('bo11').style.display = 'none';
        document.getElementById('bo1').style.display = 'block';
        document.getElementById('mensaje3.1').style.display = 'none';


    }
    }
    function consultas(num) {
        if (num == '1' && document.getElementById('pantalla2').style.display == 'block') {
            document.getElementById('pantalla2').style.display = 'none';
            document.getElementById('pantalla7').style.display = 'block';
            dinero = dinero - retiro;
            document.getElementById("dinero").value = dinero ;
            document.getElementById('bo4').style.display = 'none';
            document.getElementById('bo41').style.display = 'block';
            
        }
    }
    
    
    function cancelar1(num) {
    if (num == 1 && document.getElementById('pantalla3').style.display == 'block') {
        document.getElementById('pantalla3').style.display = 'none';
        document.getElementById('pantalla2').style.display = 'block';
        document.getElementById('bot1').style.display = 'block';
        document.getElementById('bot').style.display = 'none';
    }  
    }
    function cancelar2(num) {
    if (num == '1' && document.getElementById('pantalla4').style.display == 'block') {
            document.getElementById('pantalla4').style.display = 'none';
            document.getElementById('pantalla3').style.display = 'block';

        }
    }
    function cancelar3(num) {
       
        if (num == '1' && document.getElementById('pantalla5').style.display == 'block') {
            document.getElementById('pantalla4').style.display = 'block';
            document.getElementById('pantalla5').style.display = 'none';
            document.getElementById('bo3').style.display = 'block';
            document.getElementById('bo31').style.display = 'none';
            document.getElementById('bo21').style.display = 'none';
            document.getElementById('bo2').style.display = 'block';
        }
    }
    function atras(num) {
        if (num == 1 && document.getElementById('pantalla7').style.display == 'block') {
            document.getElementById('pantalla7').style.display = 'none';
            document.getElementById('pantalla2').style.display = 'block';
            document.getElementById('bo4').style.display = 'block';
            document.getElementById('bo41').style.display = 'none';
            document.getElementById('bo2').style.display = 'block';
            document.getElementById('bo21').style.display = 'none';

            retiro = 0;
        }
    }
    function no(num) {
        if (num == 1 && document.getElementById('pantalla6').style.display == 'block') {
            document.getElementById('pantalla6').style.display = 'none';
            document.getElementById('pantalla2').style.display = 'block';
            document.getElementById('bo1').style.display = 'block';
            document.getElementById('bo4').style.display = 'block';
            document.getElementById('bo41').style.display = 'none';
            document.getElementById('bo2').style.display = 'block';
            document.getElementById('bo21').style.display = 'none';
            document.getElementById('bot1').style.display = 'block';
            document.getElementById('bot').style.display = 'none';
            document.getElementById('bo3').style.display = 'block';
            document.getElementById('bo31').style.display = 'none';
            document.getElementById('bo11').style.display = 'none';
            document.getElementById('mensaje3.1').style.display = 'none';
            
        }
    }
    
   

   

