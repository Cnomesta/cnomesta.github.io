var emfn = 0;
var orbn = 0;
var gwn = 0;
var ftn = 0;
var sbn = 0;
var fpn = 0;
var emforb = 0;
var x = 0;
var y = 0;

function emf() {
  var element = document.getElementById("emflight1");
  element.classList.toggle("light1");
  var element = document.getElementById("emflight2");
  element.classList.toggle("light1");
  var element = document.getElementById("emflight3");
  element.classList.toggle("light1");
  var element = document.getElementById("emflight4");
  element.classList.toggle("light1");
  var element = document.getElementById("emflight5");
  element.classList.toggle("light1");
  var element = document.getElementById("emflight6");
  element.classList.toggle("light1");
  var element = document.getElementById("emfb");
  element.classList.toggle("light1");
  if (emfn == 0) {
    emfn++;
  } else {
    emfn--;
  }
}

function orb() {
  var element = document.getElementById("orblight1");
  element.classList.toggle("light1");
  var element = document.getElementById("orblight2");
  element.classList.toggle("light1");
  var element = document.getElementById("orblight3");
  element.classList.toggle("light1");
  var element = document.getElementById("orblight4");
  element.classList.toggle("light1");
  var element = document.getElementById("orblight5");
  element.classList.toggle("light1");
  var element = document.getElementById("orblight6");
  element.classList.toggle("light1");
  var element = document.getElementById("orbb");
  element.classList.toggle("light1");
  if (orbn == 0) {
    orbn++;
  } else {
    orbn--;
  }
}

function gw() {
  var element = document.getElementById("gwlight1");
  element.classList.toggle("light1");
  var element = document.getElementById("gwlight2");
  element.classList.toggle("light1");
  var element = document.getElementById("gwlight3");
  element.classList.toggle("light1");
  var element = document.getElementById("gwlight4");
  element.classList.toggle("light1");
  var element = document.getElementById("gwlight5");
  element.classList.toggle("light1");
  var element = document.getElementById("gwlight6");
  element.classList.toggle("light1");
  var element = document.getElementById("gwb");
  element.classList.toggle("light1");
  if (gwn == 0) {
    gwn++;
  } else {
    gwn--;
  }
}

function ft() {
  var element = document.getElementById("ftlight1");
  element.classList.toggle("light1");
  var element = document.getElementById("ftlight2");
  element.classList.toggle("light1");
  var element = document.getElementById("ftlight3");
  element.classList.toggle("light1");
  var element = document.getElementById("ftlight4");
  element.classList.toggle("light1");
  var element = document.getElementById("ftlight5");
  element.classList.toggle("light1");
  var element = document.getElementById("ftlight6");
  element.classList.toggle("light1");
  var element = document.getElementById("ftb");
  element.classList.toggle("light1");
  if (ftn == 0) {
    ftn++;
  } else {
    ftn--;
  }
}

function sb() {
  var element = document.getElementById("sblight1");
  element.classList.toggle("light1");
  var element = document.getElementById("sblight2");
  element.classList.toggle("light1");
  var element = document.getElementById("sblight3");
  element.classList.toggle("light1");
  var element = document.getElementById("sblight4");
  element.classList.toggle("light1");
  var element = document.getElementById("sblight5");
  element.classList.toggle("light1");
  var element = document.getElementById("sblight6");
  element.classList.toggle("light1");
  var element = document.getElementById("sblight7");
  element.classList.toggle("light1");
  var element = document.getElementById("sbb");
  element.classList.toggle("light1");
  if (sbn == 0) {
    sbn++;
  } else {
    sbn--;
  }
}

function fp() {
  var element = document.getElementById("fplight1");
  element.classList.toggle("light1");
  var element = document.getElementById("fplight2");
  element.classList.toggle("light1");
  var element = document.getElementById("fplight3");
  element.classList.toggle("light1");
  var element = document.getElementById("fplight4");
  element.classList.toggle("light1");
  var element = document.getElementById("fplight5");
  element.classList.toggle("light1");
  var element = document.getElementById("fpb");
  element.classList.toggle("light1");
  if (fpn == 0) {
    fpn++;
  } else {
    fpn--;
  }
}

function check() {

  if (emfn == 1 && orbn == 1) {
    var element = document.getElementById("fpb");
    element.classList.toggle("disable");
    return;
  } else {
    var element = document.getElementById("fpb");
    element.classList.remove("disable");
  }

  if (emfn == 1 && gwn == 1) {
    var element = document.getElementById("ftb");
    element.classList.toggle("disable");
    return;
  } else {
    var element = document.getElementById("ftb");
    element.classList.remove("disable");
  }

  if (emfn == 1 && ftn == 1) {
    var element = document.getElementById("gwb");
    element.classList.toggle("disable");
    var element = document.getElementById("sbb");
    element.classList.toggle("disable");
    return;
  } else {
    var element = document.getElementById("gwb");
    element.classList.remove("disable");
    var element = document.getElementById("sbb");
    element.classList.remove("disable");
  }

  if (emfn == 1 && sbn == 1) {
    var element = document.getElementById("ftb");
    element.classList.toggle("disable");
    var element = document.getElementById("fpb");
    element.classList.toggle("disable");
    return;
  } else {
    var element = document.getElementById("ftb");
    element.classList.remove("disable");
    var element = document.getElementById("fpb");
    element.classList.remove("disable");
  }

  if (emfn == 1 && fpn == 1) {
    var element = document.getElementById("orbb");
    element.classList.toggle("disable");
    var element = document.getElementById("sbb");
    element.classList.toggle("disable");
    return;
  } else {
    var element = document.getElementById("orbb");
    element.classList.remove("disable");
    var element = document.getElementById("sbb");
    element.classList.remove("disable");
  }

  if (orbn == 1 && gwn == 1) {
    var element = document.getElementById("sbb");
    element.classList.toggle("disable");
    var element = document.getElementById("fpb");
    element.classList.toggle("disable");
    return;
  } else {
    var element = document.getElementById("sbb");
    element.classList.remove("disable");
    var element = document.getElementById("fpb");
    element.classList.remove("disable");
  }

  if (orbn == 1 && ftn == 1) {
    var element = document.getElementById("fpb");
    element.classList.toggle("disable");
    return;
  } else {
    var element = document.getElementById("fpb");
    element.classList.remove("disable");
  }

  if (orbn == 1 && sbn == 1) {
    var element = document.getElementById("gwb");
    element.classList.toggle("disable");
    return;
  } else {
    var element = document.getElementById("gwb");
    element.classList.remove("disable");
  }

  if (orbn == 1 && fpn == 1) {
    var element = document.getElementById("emfb");
    element.classList.toggle("disable");
    var element = document.getElementById("gwb");
    element.classList.toggle("disable");
    var element = document.getElementById("ftb");
    element.classList.toggle("disable");
    return;
  } else {
    var element = document.getElementById("emfb");
    element.classList.remove("disable");
    var element = document.getElementById("gwb");
    element.classList.remove("disable");
    var element = document.getElementById("ftb");
    element.classList.remove("disable");
  }

  if (gwn == 1 && ftn == 1) {
    var element = document.getElementById("emfb");
    element.classList.toggle("disable");
    var element = document.getElementById("fpb");
    element.classList.toggle("disable");
    return;
  } else {
    var element = document.getElementById("emfb");
    element.classList.remove("disable");
    var element = document.getElementById("fpb");
    element.classList.remove("disable");
  }

  if (gwn == 1 && sbn == 1) {
    var element = document.getElementById("orbb");
    element.classList.toggle("disable");
    return;
  } else {
    var element = document.getElementById("orbb");
    element.classList.remove("disable");
  }

  if (gwn == 1 && fpn == 1) {
    var element = document.getElementById("orbb");
    element.classList.toggle("disable");
    var element = document.getElementById("ftb");
    element.classList.toggle("disable");
    return;
  } else {
    var element = document.getElementById("orbb");
    element.classList.remove("disable");
    var element = document.getElementById("ftb");
    element.classList.remove("disable");
  }

  if (ftn == 1 && sbn == 1) {
    var element = document.getElementById("emfb");
    element.classList.toggle("disable");
    return;
  } else {
    var element = document.getElementById("emfb");
    element.classList.remove("disable");
  }

  if (ftn == 1 && fpn == 1) {
    var element = document.getElementById("orbb");
    element.classList.toggle("disable");
    var element = document.getElementById("gwb");
    element.classList.toggle("disable");
    return;
  } else {
    var element = document.getElementById("orbb");
    element.classList.remove("disable");
    var element = document.getElementById("gwb");
    element.classList.remove("disable");
  }

  if (sbn == 1 && fpn == 1) {
    var element = document.getElementById("emfb");
    element.classList.toggle("disable");
    return;
  } else {
    var element = document.getElementById("emfb");
    element.classList.remove("disable");
  }
}

function clearbtn() {
  var element = document.getElementById("emflight1");
  element.classList.remove("light1");
  var element = document.getElementById("emflight2");
  element.classList.remove("light1");
  var element = document.getElementById("emflight3");
  element.classList.remove("light1");
  var element = document.getElementById("emflight4");
  element.classList.remove("light1");
  var element = document.getElementById("emflight5");
  element.classList.remove("light1");
  var element = document.getElementById("emflight6");
  element.classList.remove("light1");
  var element = document.getElementById("emfb");
  element.classList.remove("light1");
  var element = document.getElementById("orblight1");
  element.classList.remove("light1");
  var element = document.getElementById("orblight2");
  element.classList.remove("light1");
  var element = document.getElementById("orblight3");
  element.classList.remove("light1");
  var element = document.getElementById("orblight4");
  element.classList.remove("light1");
  var element = document.getElementById("orblight5");
  element.classList.remove("light1");
  var element = document.getElementById("orblight6");
  element.classList.remove("light1");
  var element = document.getElementById("orbb");
  element.classList.remove("light1");
  var element = document.getElementById("gwlight1");
  element.classList.remove("light1");
  var element = document.getElementById("gwlight2");
  element.classList.remove("light1");
  var element = document.getElementById("gwlight3");
  element.classList.remove("light1");
  var element = document.getElementById("gwlight4");
  element.classList.remove("light1");
  var element = document.getElementById("gwlight5");
  element.classList.remove("light1");
  var element = document.getElementById("gwlight6");
  element.classList.remove("light1");
  var element = document.getElementById("gwb");
  element.classList.remove("light1");
  var element = document.getElementById("ftlight1");
  element.classList.remove("light1");
  var element = document.getElementById("ftlight2");
  element.classList.remove("light1");
  var element = document.getElementById("ftlight3");
  element.classList.remove("light1");
  var element = document.getElementById("ftlight4");
  element.classList.remove("light1");
  var element = document.getElementById("ftlight5");
  element.classList.remove("light1");
  var element = document.getElementById("ftlight6");
  element.classList.remove("light1");
  var element = document.getElementById("ftb");
  element.classList.remove("light1");
  var element = document.getElementById("sblight1");
  element.classList.remove("light1");
  var element = document.getElementById("sblight2");
  element.classList.remove("light1");
  var element = document.getElementById("sblight3");
  element.classList.remove("light1");
  var element = document.getElementById("sblight4");
  element.classList.remove("light1");
  var element = document.getElementById("sblight5");
  element.classList.remove("light1");
  var element = document.getElementById("sblight6");
  element.classList.remove("light1");
  var element = document.getElementById("sblight7");
  element.classList.remove("light1");
  var element = document.getElementById("sbb");
  element.classList.remove("light1");
  var element = document.getElementById("fplight1");
  element.classList.remove("light1");
  var element = document.getElementById("fplight2");
  element.classList.remove("light1");
  var element = document.getElementById("fplight3");
  element.classList.remove("light1");
  var element = document.getElementById("fplight4");
  element.classList.remove("light1");
  var element = document.getElementById("fplight5");
  element.classList.remove("light1");
  var element = document.getElementById("fpb");
  element.classList.remove("light1");
  var element = document.getElementById("emfb");
  element.classList.remove("disable");
  var element = document.getElementById("orbb");
  element.classList.remove("disable");
  var element = document.getElementById("gwb");
  element.classList.remove("disable");
  var element = document.getElementById("ftb");
  element.classList.remove("disable");
  var element = document.getElementById("sbb");
  element.classList.remove("disable");
  var element = document.getElementById("fpb");
  element.classList.remove("disable");
  if (emfn == 1) {
    emfn--;
  }
  if (orbn == 1) {
    orbn--;
  }
  if (gwn == 1) {
    gwn--;
  }
  if (ftn == 1) {
    ftn--;
  }
  if (sbn == 1) {
    sbn--;
  }
  if (fpn == 1) {
    fpn--;
  }
}

/*
if ( == 1 &&  == 1) {
  var element = document.getElementById("");
  element.classList.toggle("disable");
} else {
  var element = document.getElementById("");
  element.classList.remove("disable");
}


  var element = document.getElementById("");
  element.classList.toggle("disable");
  var element = document.getElementById("");
  element.classList.toggle("disable");
  } else {
  var element = document.getElementById("");
  element.classList.remove("disable");
  var element = document.getElementById("");
  element.classList.remove("disable");
  }

  var element = document.getElementById("");
  element.classList.toggle("disable");
  var element = document.getElementById("");
  element.classList.toggle("disable");
  var element = document.getElementById("");
  element.classList.toggle("disable");
  } else {
  var element = document.getElementById("");
  element.classList.remove("disable");
  var element = document.getElementById("");
  element.classList.remove("disable");
  var element = document.getElementById("");
  element.classList.remove("disable");
  }
*/
