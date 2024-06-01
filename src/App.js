import './App.css';
import Input from './componentes/Input';
import Output from './componentes/Output';
import Selector from './componentes/Selector';
import Button from './componentes/Button';
import { useRef, useState } from 'react';

function App() {
  //Se crean las referencias y variables para tension
  const triphasic = useRef();
  const monophasic = useRef();
  //-----
  const [BtnTension, setBtnTension] = useState('');

  //Acciones para tensiones
  const changeStyleMono = (e) =>{
  BtnTension === 'monophasic' ? setBtnTension(undefined) : setBtnTension('monophasic');
  e.target.classList.toggle('btn--active');
  triphasic.current.classList.remove('btn--active');
 }

 const changeStyleTri = (e) =>{
  BtnTension === 'triphasic' ? setBtnTension(undefined) : setBtnTension('triphasic');
  e.target.classList.toggle('btn--active');
  monophasic.current.classList.remove('btn--active');
 }

 //Se crean referencias y variables para cableados
 const buried = useRef();
 const exterior = useRef();
 const air = useRef();
 //-----
 let BtnConduit;

 //Acciones para cableados

 const changeStyleBur = (e) =>{
  BtnConduit === 'buried' ? BtnConduit = undefined : BtnConduit = 'buried';
  e.target.classList.toggle('btn--active');
  exterior.current.classList.remove('btn--active');
  air.current.classList.remove('btn--active');
 }

 const changeStyleExt = (e) =>{
  BtnConduit === 'exterior' ? BtnConduit = undefined : BtnConduit = 'exterior';
  e.target.classList.toggle('btn--active');
  buried.current.classList.remove('btn--active');
  air.current.classList.remove('btn--active');
 }

 const changeStyleAir = (e) =>{
  BtnConduit === 'air' ? BtnConduit = undefined : BtnConduit = 'air';
  e.target.classList.toggle('btn--active');
  exterior.current.classList.remove('btn--active');
  buried.current.classList.remove('btn--active');
 }

 //Se crean referencias y variables para entradas
 const ratedPowerInput = useRef();
 const fcValueInput = useRef();
 const fsValueInput = useRef();
 const performanceInput = useRef();
 const fiCosInput = useRef();
 const segmentLengthInput = useRef();
 const maxTensionFallInput = useRef();
 const ztValueInput = useRef();
 const kValueInput = useRef();
 //-----
 let RP;
 let FC;
 let FS;
 let Per;
 let FiC;
 let SL;
 let MTF;
 let ZtV;
 let KV;

 //Acciones para entradas
 const applyValueRP = (e) => {
 RP = parseFloat(e.target.value);
 }

 const applyValueFC = (e) => {
  FC = parseFloat(e.target.value);
 }

 const applyValueFS = (e) => {
  FS = parseFloat(e.target.value);
 }

 const applyValuePer = (e) => {
  Per = parseFloat(e.target.value);
 }

 const applyValueFiC = (e) => {
  FiC = parseFloat(e.target.value);
 }

 const applyValueSL = (e) => {
  SL = parseFloat(e.target.value);
 }

 const applyValueMTF = (e) => {
  MTF = parseFloat(e.target.value);
 }

 const applyValueZtV = (e) => {
  ZtV = parseFloat(e.target.value);
 }

 const applyValueKV = (e) => {
  KV = parseFloat(e.target.value);
 }

 //Cambio de focus entre inputs
const changeFocusFC = (e) =>{
 if(e.keyCode === 13){
    fcValueInput.current.focus();
 }
}

const changeFocusFS = (e) =>{
 if(e.keyCode === 13){
    fsValueInput.current.focus();
 }
}

const changeFocusPer = (e) =>{
 if(e.keyCode === 13){
    performanceInput.current.focus();
 }
}
 
const changeFocusFiC = (e) =>{
 if(e.keyCode === 13){
    fiCosInput.current.focus();
 }
}

const changeFocusSL = (e) =>{
 if(e.keyCode === 13){
    document.activeElement.blur();
    alert('Elegit tipo de cañería');
 }
}

const changeFocusMTF = (e) =>{
 if(e.keyCode === 13){
    maxTensionFallInput.current.focus();
 }
}

const changeFocusZT = (e) =>{
 if(e.keyCode === 13){
    ztValueInput.current.focus();
 }
}

const changeFocusK = (e) =>{ 
 if(e.keyCode === 13){
    kValueInput.current.focus();
 }
}
 //Cambio de focus ultimo input
const changeFocusBtn = (e) =>{  
 if(e.keyCode === 13){
    btnSubmit.current.focus();
 }
}

 //Se crean referencias botones y declaración de variables
 const [ResultsState, setResultsState] = useState('data__output__general');
 const btnSubmit = useRef();
 const btnClear = useRef();

 //Acciones para botones
 const submit = (e) => {//Btn submit
  if(BtnTension==='monophasic'){
    monophasicTension();
    setResultsState('data__output__general--active');

  }
  else if(BtnTension==='triphasic'){
    triphasicTension();
    setResultsState('data__output__general--active');
  }
  else{
    error();
  }
 }

 //Reestablece para volver a calcular
 /*const resetResults = () => {
  setDemandedPowerRender();
  setProyectedCurrentRender();
  setChosenSectionRender();
  setTensionFallRender();
  setZRValueRender();
  setSCCValueRender();
  setMinimumSectionRender();
 }*/

 //Reestablecer los estilos
 /*const resetStyles = () => {
    if(BtnTension==='monophasic'){
        monophasic.current.classList.remove('btn--active')
    }else if(BtnTension==='triphasic'){
        triphasic.current.classList.remove('btn--active')
    }

    if(BtnConduit==='buried'){
        buried.current.classList.remove('btn--active')
    }else if(BtnConduit==='exterior'){
        exterior.current.classList.remove('btn--active')
    }else if(BtnConduit==='air'){
        air.current.classList.remove('btn--active');
    }
}*/
 
 const clear = (e) =>{//Btn clear
    //Cancelé los resets porque no funcionaban completamente
    /*setResultsState('data__output__general');
    resetResults();
    resetStyles();*/
    window.location.reload();
}

 //Variables para los calculos
 let DemandedPowerOk;
 let ProyectedCurrentOk;
 let LengthKm;
 let SenFi;
 let TensionFall;
 let TensionFall2;
 let TensionFall3;
 let ZR;
 let ShortCircuitCurrent;
 let MinimumSection;
 //Variables para resultados
 let DemandedPowerMessage;
 let ProyectedCurrentMessage;
 let ChosenSection;
 let TensionFallMessage;
 let ZRValueMessage;
 let SCCValueMessage;
 let MinimumSectionMessage;
 //Variables para renderizar resultado
 const [DemandedPowerRender, setDemandedPowerRender] = useState();
 const [ProyectedCurrentRender, setProyectedCurrentRender] = useState();
 const [ChosenSectionRender, setChosenSectionRender] = useState();
 const [TensionFallRender, setTensionFallRender] = useState();
 const [ZRValueRender, setZRValueRender] = useState();
 const [SCCValueRender, setSCCValueRender] = useState();
 const [MinimumSectionRender, setMinimumSectionRender] = useState();

 //------Variables para cableado
 let SEleg;
 let REleg;
 let XEleg;

 let MaxCurrentBuried=[15, 21, 28, 36, 50, 66, 88, 109, 131, 167, 202, 234];
 let MaxCurrentExterior=[13, 18, 25, 32, 44, 59, 77, 96, 117, 149, 180, 208];
 let MaxCurrentAir=[15, 21, 28, 36, 50, 68, 89, 111, 134, 171, 207, 239];

 let seccion1=`S=1.5 mm2, R=15.9 Ohm/km, X=0.108 Ohm/km `;
 let seccion2=`S=2.5 mm2, R=9.55 Ohm/km, X=0.0995 Ohm/km `;
 let seccion3=`S=4 mm2, R=5.92 Ohm/km, X=0.0991 Ohm/km `;
 let seccion4=`S=6 mm2, R=3.95 Ohm/km, X=0.0901 Ohm/km `;
 let seccion5=`S=10 mm2, R=2.29 Ohm/km, X=0.086 Ohm/km `;
 let seccion6=`S=16 mm2, R=1.45 Ohm/km, X=0.0813 Ohm/km `;
 let seccion7=`S=25 mm2, R=0.933 Ohm/km, X=0.078 Ohm/km `;
 let seccion8=`S=35 mm2, R=0.663 Ohm/km, X=0.076 Ohm/km `;
 let seccion9=`S=50 mm2, R=0.462 Ohm/km, X=0.0757 Ohm/km `;
 let seccion10=`S=70 mm2, R=0.326 Ohm/km, X=0.0736 Ohm/km `;
 let seccion11=`S=95 mm2, R=0.248 Ohm/km, X=0.0733 Ohm/km `;
 let seccion12=`S=120 mm2, R=0.194 Ohm/km, X=0.0729 Ohm/km `;
 let seccionNO=`Demasiada corriente, no hay datos en tabla `;
 let seccionesEC=[seccion1, seccion2, seccion3, seccion4, seccion5, seccion6, seccion7, seccion8, seccion9, seccion10, seccion11, seccion12, seccionNO];

 let R1=15.9;
 let R2=9.55;
 let R3=5.92;
 let R4=3.95;
 let R5=2.29;
 let R6=1.45;
 let R7=0.933;
 let R8=0.663;
 let R9=0.462;
 let R10=0.326;
 let R11=0.248;
 let R12=0.194;
 let REC=[R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11, R12];

 let X1=0.108;
 let X2=0.0995;
 let X3=0.0991;
 let X4=0.0901;
 let X5=0.086;
 let X6=0.0813;
 let X7=0.078;
 let X8=0.076;
 let X9=0.0757;
 let X10=0.0736;
 let X11=0.0733;
 let X12=0.0729;
 let XEC=[X1, X2, X3, X4, X5, X6, X7, X8, X9, X10, X11, X12]

 //Calculo para tensión monofásica
 const monophasicTension = () =>{
  //Potencia demandada
  DemandedPowerOk=(RP*FC*FS);
  DemandedPowerMessage="Potencia demandada: "+DemandedPowerOk+" W";
  //Corriente de proyecto
  ProyectedCurrentOk=(DemandedPowerOk/(220*Per*FiC));
  ProyectedCurrentMessage="Corriente de proyecto: "+ProyectedCurrentOk+" A";
  
  //Se establecen los datos de Reactancia, Resistencia y Sección
  if (BtnConduit==='buried') {//Enterrado
    if (ProyectedCurrentOk<=MaxCurrentBuried[0]) {

        SEleg=0;
        REleg=0;
        XEleg=0;

    }else if (ProyectedCurrentOk<=MaxCurrentBuried[1]) {

        SEleg=1;
        REleg=1;
        XEleg=1;
        
    }else if (ProyectedCurrentOk<=MaxCurrentBuried[2]) {

        SEleg=2;
        REleg=2;
        XEleg=2;
        
    }else if (ProyectedCurrentOk<=MaxCurrentBuried[3]) {

        SEleg=3;
        REleg=3;
        XEleg=3;
        
    }else if (ProyectedCurrentOk<=MaxCurrentBuried[4]) {

        SEleg=4;
        REleg=4;
        XEleg=4;
        
    }else if (ProyectedCurrentOk<=MaxCurrentBuried[5]) {

        SEleg=5;
        REleg=5;
        XEleg=5;
        
    }else if (ProyectedCurrentOk<=MaxCurrentBuried[6]) {

        SEleg=6;
        REleg=6;
        XEleg=6;
        
    }else if (ProyectedCurrentOk<=MaxCurrentBuried[7]) {

        SEleg=7;
        REleg=7;
        XEleg=7;
        
    }else if (ProyectedCurrentOk<=MaxCurrentBuried[8]) {

        SEleg=8;
        REleg=8;
        XEleg=8;
        
    }else if (ProyectedCurrentOk<=MaxCurrentBuried[9]) {

        SEleg=9;
        REleg=9;
        XEleg=9;
        
    }else if (ProyectedCurrentOk<=MaxCurrentBuried[10]) {

        SEleg=10;
        REleg=10;
        XEleg=10;
        
    }else if (ProyectedCurrentOk<=MaxCurrentBuried[11]) {

        SEleg=11;
        REleg=11;
        XEleg=11;
        
    }else if(ProyectedCurrentOk<=MaxCurrentBuried[12]){

        SEleg=12;
        REleg=12;
        XEleg=12;
        
    }else{
        alert(seccionNO);
    }
} else if (BtnConduit==='exterior') {//cañeria externa
    if (ProyectedCurrentOk<=MaxCurrentExterior[0]) {
            
        SEleg=0;
        REleg=0;
        XEleg=0;

    }else if (ProyectedCurrentOk<=MaxCurrentExterior[1]) {

        SEleg=1;
        REleg=1;
        XEleg=1;
        
    }else if (ProyectedCurrentOk<=MaxCurrentExterior[2]) {

        SEleg=2;
        REleg=2;
        XEleg=2;
        
    }else if (ProyectedCurrentOk<=MaxCurrentExterior[3]) {

        SEleg=3;
        REleg=3;
        XEleg=3;
        
    }else if (ProyectedCurrentOk<=MaxCurrentExterior[4]) {

        SEleg=4;
        REleg=4;
        XEleg=4;
      
    }else if (ProyectedCurrentOk<=MaxCurrentExterior[5]) {

        SEleg=5;
        REleg=5;
        XEleg=5;
        
    }else if (ProyectedCurrentOk<=MaxCurrentExterior[6]) {

        SEleg=6;
        REleg=6;
        XEleg=6;
        
    }else if (ProyectedCurrentOk<=MaxCurrentExterior[7]) {

        SEleg=7;
        REleg=7;
        XEleg=7;
        
    }else if (ProyectedCurrentOk<=MaxCurrentExterior[8]) {

        SEleg=8;
        REleg=8;
        XEleg=8;
        
    }else if (ProyectedCurrentOk<=MaxCurrentExterior[9]) {

        SEleg=9;
        REleg=9;
        XEleg=9;
        
    }else if (ProyectedCurrentOk<=MaxCurrentExterior[10]) {

        SEleg=10;
        REleg=10;
        XEleg=10;
    
    }else if (ProyectedCurrentOk<=MaxCurrentExterior[11]) {

        SEleg=11;
        REleg=11;
        XEleg=11;
        
    }else if(ProyectedCurrentOk<=MaxCurrentBuried[12]){

        SEleg=12;
        REleg=12;
        XEleg=12;
        
    }else{
        alert(seccionNO);
    }
}else if(BtnConduit==='air') {//Aire
    if (ProyectedCurrentOk<=MaxCurrentAir[0]) {
            
        SEleg=0;
        REleg=0;
        XEleg=0;
    
    }else if (ProyectedCurrentOk<=MaxCurrentAir[1]) {

        SEleg=1;
        REleg=1;
        XEleg=1;
        
    }else if (ProyectedCurrentOk<=MaxCurrentAir[2]) {

        SEleg=2;
        REleg=2;
        XEleg=2;
      
    }else if (ProyectedCurrentOk<=MaxCurrentAir[3]) {

        SEleg=3;
        REleg=3;
        XEleg=3;
        
    }else if (ProyectedCurrentOk<=MaxCurrentAir[4]) {

        SEleg=4;
        REleg=4;
        XEleg=4;
        
    }else if (ProyectedCurrentOk<=MaxCurrentAir[5]) {

        SEleg=5;
        REleg=5;
        XEleg=5;
        
    }else if (ProyectedCurrentOk<=MaxCurrentAir[6]) {

        SEleg=6;
        REleg=6;
        XEleg=6;
        
    }else if (ProyectedCurrentOk<=MaxCurrentAir[7]) {

        SEleg=7;
        REleg=7;
        XEleg=7;
        
    }else if (ProyectedCurrentOk<=MaxCurrentAir[8]) {

        SEleg=8;
        REleg=8;
        XEleg=8;
        
    }else if (ProyectedCurrentOk<=MaxCurrentAir[9]) {

        SEleg=9;
        REleg=9;
        XEleg=9;

    }else if (ProyectedCurrentOk<=MaxCurrentAir[10]) {

        SEleg=10;
        REleg=10;
        XEleg=10;
        
    }else if (ProyectedCurrentOk<=MaxCurrentAir[11]) {

        SEleg=11;
        REleg=11;
        XEleg=11;
        
    }else if(ProyectedCurrentOk<=MaxCurrentBuried[12]){

        SEleg=12;
        REleg=12;
        XEleg=12;
        
    }else{
        alert(seccionNO);
    }
}

//Porcentaje caída de tensión, Seno de Fí y longitud en Km
LengthKm=(SL/1000);
SenFi=(Math.cos(Math.asin(FiC)));
TensionFall=(LengthKm*ProyectedCurrentOk*((REC[REleg]*FiC)+(XEC[XEleg]*SenFi))*(100/220));

//Se determina la sección
if (TensionFall<=MTF) {
  ChosenSection = seccionesEC[SEleg];
  TensionFallMessage="Bajo porcentaje de caída: "+TensionFall+"% menor que "+MTF+"%";
}else{
  TensionFall2=(LengthKm*ProyectedCurrentOk*((REC[REleg+1]*FiC)+(XEC[XEleg+1]*SenFi))*(100/220));
  if (TensionFall2<=MTF) {
    ChosenSection = seccionesEC[SEleg+1];
    TensionFallMessage="Con un porcentaje de caida del: "+TensionFall2+"% menor que "+MTF+"%";
  }
  else{
    ChosenSection = seccionesEC[SEleg+2];
    TensionFall3=(LengthKm*ProyectedCurrentOk*((REC[REleg+2]*FiC)+(XEC[XEleg+2]*SenFi))*(100/220));
    TensionFallMessage="Con un porcentaje de caida del: "+TensionFall3+"% menor que "+MTF+"%";
  }
}

//Impedancia de red
ZR=((Math.sqrt(Math.pow(REC[REleg], 2)+Math.pow(XEC[XEleg], 2)))*LengthKm);
ZRValueMessage="Impedancia de red: "+ZR+" Ohms ";

//Corriente de cortocircuito
ShortCircuitCurrent=(220/(ZR+ZtV));
SCCValueMessage="Corriente de cortocircuito: "+ShortCircuitCurrent+" A ";

//Sección mínima
MinimumSection=((ShortCircuitCurrent*Math.sqrt(0.02))/KV);
MinimumSectionMessage="Sección mínima del cable pero no recomendable: "+MinimumSection+" mm2 ";


//Aplica valor para renderizado
  setDemandedPowerRender(DemandedPowerMessage);
  setProyectedCurrentRender(ProyectedCurrentMessage);
  setChosenSectionRender(ChosenSection);
  setTensionFallRender(TensionFallMessage);
  setZRValueRender(ZRValueMessage);
  setSCCValueRender(SCCValueMessage);
  setMinimumSectionRender(MinimumSectionMessage);
}


 //Calculo para tensión trifásica
 const triphasicTension = () =>{
    //Potencia demandada
    DemandedPowerOk=(RP*FC*FS);
    DemandedPowerMessage="Potencia demandada: "+DemandedPowerOk+" W";
    //Corriente de proyecto
    ProyectedCurrentOk=(DemandedPowerOk/(Math.sqrt(3)*380*Per*FiC));
    ProyectedCurrentMessage="Corriente de proyecto: "+ProyectedCurrentOk+" A";
    
    //Se establecen los datos de Reactancia, Resistencia y Sección
    if (BtnConduit==='buried') {//Enterrado
      if (ProyectedCurrentOk<=MaxCurrentBuried[0]) {
  
          SEleg=0;
          REleg=0;
          XEleg=0;
  
      }else if (ProyectedCurrentOk<=MaxCurrentBuried[1]) {
  
          SEleg=1;
          REleg=1;
          XEleg=1;
          
      }else if (ProyectedCurrentOk<=MaxCurrentBuried[2]) {
  
          SEleg=2;
          REleg=2;
          XEleg=2;
          
      }else if (ProyectedCurrentOk<=MaxCurrentBuried[3]) {
  
          SEleg=3;
          REleg=3;
          XEleg=3;
          
      }else if (ProyectedCurrentOk<=MaxCurrentBuried[4]) {
  
          SEleg=4;
          REleg=4;
          XEleg=4;
          
      }else if (ProyectedCurrentOk<=MaxCurrentBuried[5]) {
  
          SEleg=5;
          REleg=5;
          XEleg=5;
          
      }else if (ProyectedCurrentOk<=MaxCurrentBuried[6]) {
  
          SEleg=6;
          REleg=6;
          XEleg=6;
          
      }else if (ProyectedCurrentOk<=MaxCurrentBuried[7]) {
  
          SEleg=7;
          REleg=7;
          XEleg=7;
          
      }else if (ProyectedCurrentOk<=MaxCurrentBuried[8]) {
  
          SEleg=8;
          REleg=8;
          XEleg=8;
          
      }else if (ProyectedCurrentOk<=MaxCurrentBuried[9]) {
  
          SEleg=9;
          REleg=9;
          XEleg=9;
          
      }else if (ProyectedCurrentOk<=MaxCurrentBuried[10]) {
  
          SEleg=10;
          REleg=10;
          XEleg=10;
          
      }else if (ProyectedCurrentOk<=MaxCurrentBuried[11]) {
  
          SEleg=11;
          REleg=11;
          XEleg=11;
          
      }else if(ProyectedCurrentOk<=MaxCurrentBuried[12]){

        SEleg=12;
        REleg=12;
        XEleg=12;
        
    }else{
        alert(seccionNO);
    }
  } else if (BtnConduit==='exterior') {//cañeria externa
      if (ProyectedCurrentOk<=MaxCurrentExterior[0]) {
              
          SEleg=0;
          REleg=0;
          XEleg=0;
  
      }else if (ProyectedCurrentOk<=MaxCurrentExterior[1]) {
  
          SEleg=1;
          REleg=1;
          XEleg=1;
          
      }else if (ProyectedCurrentOk<=MaxCurrentExterior[2]) {
  
          SEleg=2;
          REleg=2;
          XEleg=2;
          
      }else if (ProyectedCurrentOk<=MaxCurrentExterior[3]) {
  
          SEleg=3;
          REleg=3;
          XEleg=3;
          
      }else if (ProyectedCurrentOk<=MaxCurrentExterior[4]) {
  
          SEleg=4;
          REleg=4;
          XEleg=4;
        
      }else if (ProyectedCurrentOk<=MaxCurrentExterior[5]) {
  
          SEleg=5;
          REleg=5;
          XEleg=5;
          
      }else if (ProyectedCurrentOk<=MaxCurrentExterior[6]) {
  
          SEleg=6;
          REleg=6;
          XEleg=6;
          
      }else if (ProyectedCurrentOk<=MaxCurrentExterior[7]) {
  
          SEleg=7;
          REleg=7;
          XEleg=7;
          
      }else if (ProyectedCurrentOk<=MaxCurrentExterior[8]) {
  
          SEleg=8;
          REleg=8;
          XEleg=8;
          
      }else if (ProyectedCurrentOk<=MaxCurrentExterior[9]) {
  
          SEleg=9;
          REleg=9;
          XEleg=9;
          
      }else if (ProyectedCurrentOk<=MaxCurrentExterior[10]) {
  
          SEleg=10;
          REleg=10;
          XEleg=10;
      
      }else if (ProyectedCurrentOk<=MaxCurrentExterior[11]) {
  
          SEleg=11;
          REleg=11;
          XEleg=11;
          
      }else if(ProyectedCurrentOk<=MaxCurrentBuried[12]){

        SEleg=12;
        REleg=12;
        XEleg=12;
        
    }else{
        alert(seccionNO);
    }
  }else if(BtnConduit==='air') {//Aire
      if (ProyectedCurrentOk<=MaxCurrentAir[0]) {
              
          SEleg=0;
          REleg=0;
          XEleg=0;
      
      }else if (ProyectedCurrentOk<=MaxCurrentAir[1]) {
  
          SEleg=1;
          REleg=1;
          XEleg=1;
          
      }else if (ProyectedCurrentOk<=MaxCurrentAir[2]) {
  
          SEleg=2;
          REleg=2;
          XEleg=2;
        
      }else if (ProyectedCurrentOk<=MaxCurrentAir[3]) {
  
          SEleg=3;
          REleg=3;
          XEleg=3;
          
      }else if (ProyectedCurrentOk<=MaxCurrentAir[4]) {
  
          SEleg=4;
          REleg=4;
          XEleg=4;
          
      }else if (ProyectedCurrentOk<=MaxCurrentAir[5]) {
  
          SEleg=5;
          REleg=5;
          XEleg=5;
          
      }else if (ProyectedCurrentOk<=MaxCurrentAir[6]) {
  
          SEleg=6;
          REleg=6;
          XEleg=6;
          
      }else if (ProyectedCurrentOk<=MaxCurrentAir[7]) {
  
          SEleg=7;
          REleg=7;
          XEleg=7;
          
      }else if (ProyectedCurrentOk<=MaxCurrentAir[8]) {
  
          SEleg=8;
          REleg=8;
          XEleg=8;
          
      }else if (ProyectedCurrentOk<=MaxCurrentAir[9]) {
  
          SEleg=9;
          REleg=9;
          XEleg=9;
  
      }else if (ProyectedCurrentOk<=MaxCurrentAir[10]) {
  
          SEleg=10;
          REleg=10;
          XEleg=10;
          
      }else if (ProyectedCurrentOk<=MaxCurrentAir[11]) {
  
          SEleg=11;
          REleg=11;
          XEleg=11;
          
      }else if(ProyectedCurrentOk<=MaxCurrentBuried[12]){

        SEleg=12;
        REleg=12;
        XEleg=12;
        
    }else{
        alert(seccionNO);
    }
  }
  
  //Porcentaje caída de tensión, Seno de Fí y longitud en Km
  LengthKm=(SL/1000);
  SenFi=(Math.cos(Math.asin(FiC)));
  TensionFall=(Math.sqrt(3)*LengthKm*ProyectedCurrentOk*((REC[REleg]*FiC)+(XEC[XEleg]*SenFi))*(100/380));

  //Se determina la sección
  if (TensionFall<=MTF) {
    ChosenSection = seccionesEC[SEleg];
    TensionFallMessage="Bajo porcentaje de caída: "+TensionFall+"% menor que "+MTF+"%";
  }else{
    TensionFall2=(Math.sqrt(3)*LengthKm*ProyectedCurrentOk*((REC[REleg+1]*FiC)+(XEC[XEleg+1]*SenFi))*(100/380));
    if (TensionFall2<=MTF) {
      ChosenSection = seccionesEC[SEleg+1];
      TensionFallMessage="Con un porcentaje de caida del: "+TensionFall2+"% menor que "+MTF+"%";
    }
    else{
      ChosenSection = seccionesEC[SEleg+2];
      TensionFall3=(Math.sqrt(3)*LengthKm*ProyectedCurrentOk*((REC[REleg+2]*FiC)+(XEC[XEleg+2]*SenFi))*(100/380));
      TensionFallMessage="Con un porcentaje de caida del: "+TensionFall3+"% menor que "+MTF+"%";
    }
  }

  //Impedancia de red
  ZR=((Math.sqrt(Math.pow(REC[REleg], 2)+Math.pow(XEC[XEleg], 2)))*LengthKm);
  ZRValueMessage="Impedancia de red: "+ZR+" Ohms ";

  //Corriente de cortocircuito
  ShortCircuitCurrent=(220/(ZR+ZtV));
  SCCValueMessage="Corriente de cortocircuito: "+ShortCircuitCurrent+" A ";

  //Sección Mínima
  MinimumSection=((ShortCircuitCurrent*Math.sqrt(0.02))/KV);
  MinimumSectionMessage="Sección mínima del cable pero no recomendable: "+MinimumSection+" mm2 ";


  //Aplica valor para renderizado
  setDemandedPowerRender(DemandedPowerMessage);
  setProyectedCurrentRender(ProyectedCurrentMessage);
  setChosenSectionRender(ChosenSection);
  setTensionFallRender(TensionFallMessage);
  setZRValueRender(ZRValueMessage);
  setSCCValueRender(SCCValueMessage);
  setMinimumSectionRender(MinimumSectionMessage);
}

 //Respuesta para ninguna opción
 const error = () =>{
  alert('No se eligió tipo de electrificación');
 }
 //Renderizado
  return (
    <div className="App">
      <div className='data-input-container'>
      <h3 className='use__title'>Responder ordenadamente para asegurar el correcto funcionamiento de la página</h3>
      <h1 className='tension-title'>Seleccionar tipo de electrificación</h1>
        <div className='tension-selector-container'>
          <Selector ref={monophasic} action={changeStyleMono} id={'tension monophasic '}>Monofásico</Selector>
          <Selector ref={triphasic} action={changeStyleTri} id={'tension triphasic'}>Trifásico</Selector>
        </div>
        <Input ref={ratedPowerInput} change={applyValueRP} keydown={changeFocusFC}>Potencia nominal</Input>
        <Input ref={fcValueInput} change={applyValueFC} keydown={changeFocusFS}>Valor Fc</Input>
        <Input ref={fsValueInput} change={applyValueFS} keydown={changeFocusPer}>Valor Fs</Input>
        <Input ref={performanceInput} change={applyValuePer} keydown={changeFocusFiC}>Rendimiento</Input>
        <Input ref={fiCosInput} change={applyValueFiC} keydown={changeFocusSL}>Coseno de fí</Input>
        <h1 className='conduit-title'>Seleccionar tipo de Cañería</h1>
        <div className='conduit-selector-container'>
          <Selector ref={buried} action={changeStyleBur} id={'conduit buried'}>Enterrado</Selector>
          <Selector ref={exterior} action={changeStyleExt} id={'conduit exterior'}>Exterior</Selector>
          <Selector ref={air} action={changeStyleAir} id={'conduit air'}>Aire</Selector>
        </div>
        <Input ref={segmentLengthInput} change={applyValueSL} keydown={changeFocusMTF}>Longitud del segmento en metros</Input>
        <Input ref={maxTensionFallInput} change={applyValueMTF} keydown={changeFocusZT}>Máximo porcentaje de caída</Input>
        <Input ref={ztValueInput} change={applyValueZtV} keydown={changeFocusK}>Valor Zt</Input>
        <Input ref={kValueInput} change={applyValueKV} keydown={changeFocusBtn}>Valor K</Input>
        <div className='button-container'>
          <Button ref={btnSubmit} identifier={'submit'} action={submit}>Calcular</Button>
          <Button ref={btnClear} identifier={'clear'} action={clear}>Limpiar</Button>
        </div>
        <h1 className='results__title'>Resultados</h1>
        <div className={ResultsState}>
          <Output title={DemandedPowerRender}/>
          <Output title={ProyectedCurrentRender}/>
          <Output title={ChosenSectionRender}/>
          <Output title={TensionFallRender}/>
          <Output title={ZRValueRender}/>
          <Output title={SCCValueRender}/>
          <Output title={MinimumSectionRender}/>
        </div>
      </div>
    </div>
  );
}

export default App;


/*Termina*/