
// QR Scanner
const resultDiv = document.getElementById("result");
const html5QrcodeScanner = new Html5Qrcode("reader");

function onScanSuccess(decodedText, decodedResult) {
  resultDiv.innerHTML = `
    <p class="text-green-600 font-semibold text-lg">Asset Scanned:</p>
    <p class="text-gray-800 font-bold text-xl mt-2">${decodedText}</p>
    <button onclick="location.href='/verify/${decodedText}'" 
      class="mt-4 bg-indigo-500 text-white px-6 py-2 rounded-xl hover:bg-indigo-600 transition font-medium flex items-center justify-center gap-2 mx-auto">
      <i class="fas fa-check"></i> Verify Asset
    </button>
  `;
  resultDiv.classList.add("scale-100", "opacity-100");
  html5QrcodeScanner.stop().catch(err => console.error(err));
}

function onScanError(errorMessage) {
  // optional: handle scan errors
}

Html5Qrcode.getCameras().then(cameras => {
  if (cameras && cameras.length) {
    html5QrcodeScanner.start(
      { deviceId: cameras[0].id },
      { fps: 10, qrbox: 280 },
      onScanSuccess,
      onScanError
    ).catch(err => console.error("Camera start error:", err));
  } else {
    resultDiv.innerHTML = `<p class="text-red-500 font-semibold">No camera found</p>`;
  }
}).catch(err => {
  resultDiv.innerHTML = `<p class="text-red-500 font-semibold">Camera access error</p>`;
  console.error(err);
});
