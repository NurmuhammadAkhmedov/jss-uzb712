const harf = prompt("Ismingizni kiriting");
const ism = prompt("Bironta harf kiriting");
if (ism && harf.includes(ism)) {
    alert(`${ism} ismining ichida ${harf} harfi mavjud`);
} else {
    alert(`${harf} ismining ichida ${ism} harfi mavjud emas`);
}