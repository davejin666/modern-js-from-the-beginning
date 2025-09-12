function func1() {
    console.log('func1() invoked...');
    func2();
    console.log('exiting func1()...');
}

function func2() {
    console.log('func2() invoked...');
    func3();
    console.log('exiting func2()...');
}

function func3() {
    console.log('func3() invoked...');
    console.log('exiting func3()...');
}

func1();
