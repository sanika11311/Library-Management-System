import React, { useEffect, useRef, useState } from "react";
import { Html5Qrcode } from "html5-qrcode";

function BarcodeScanner({ onScanSuccess, onClose }) {
  const scannerRef = useRef(null);
  const [scannedResult, setScannedResult] = useState("");

  useEffect(() => {
    scannerRef.current = new Html5Qrcode("reader");

    scannerRef.current
      .start(
        { facingMode: "environment" },
        {
          fps: 5, // slower = more stable
          qrbox: { width: 250, height: 250 }
        },
        (decodedText) => {
          console.log("Auto Scanned:", decodedText);
          setScannedResult(decodedText);
        },
        () => {}
      )
      .catch((err) => console.log(err));

    return () => {
      scannerRef.current.stop().catch(() => {});
    };
  }, []);

  // 🔥 MANUAL CONFIRM BUTTON
  const handleConfirm = () => {
    if (scannedResult) {
      onScanSuccess(scannedResult);
      scannerRef.current.stop();
    } else {
      alert("No barcode detected yet!");
    }
  };

  return (
    <div className="scanner-container">
      <h3>📷 Scan Barcode</h3>

      <div id="reader"></div>

      <p>Result: {scannedResult || "No scan yet..."}</p>

      <button className="primary-btn" onClick={handleConfirm}>
        ✅ Confirm Scan
      </button>

      <button className="primary-btn" onClick={onClose}>
        ❌ Close
      </button>
    </div>
  );
}

export default BarcodeScanner;