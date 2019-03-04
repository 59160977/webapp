function printBuy(){
    w=window.open();
    w.document.write(document.getElementsByClassName('main')[0].innerHTML);
    // w.document.write(document.getElementsByClassName('main')[0].innerH‌​TML);
    w.print();
    w.close();
}