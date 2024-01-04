// Ví dụ 1:
// var a = 10;

// var promise = new Promise((resolve, reject) => {
//     if(a !== undefined && a !== null && a !== "") {
//         resolve(a); //Thành công
//     } else {
//         reject(a); //Thất bại
//     }
// });

// promise
//     .then((success) => {
//         console.log(success);
//         return success;
//     })
//     .then((success2) => {
//         const b = 20;
//         console.log(success2 + b);
//         return success2 + b;
//     })
//     .then((success3) => {
//         const c = 30;
//         console.log(success3 + c);
//     })
//     .catch((error) => {
//         console.log("Lỗi: ", error);
//     })
//     .finally(() => {
//         console.log("Luôn vào đây!");
//     })

    // Ví dụ 2
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve();
            reject();
        }, 3000);
    });

    console.log(promise);

    setTimeout(() => {
        console.log("Sau 1s: ", promise);
    }, 1000);

    console.log(promise);
    setTimeout(() => {
        console.log("Sau 2s: ", promise);
    }, 2000);

    console.log(promise);
    setTimeout(() => {
        console.log("Sau 3s: ", promise);
    }, 3000);