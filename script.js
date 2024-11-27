function updateClock() {
    const now = new Date();
  
    // Ambil waktu
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
  
    // Ambil tanggal
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const dayName = days[now.getDay()];
    const monthName = months[now.getMonth()];
    const dateString = `${dayName}, ${now.getDate()} ${monthName} ${now.getFullYear()}`;
  
    // Update elemen di halaman
    document.getElementById('time').textContent = timeString;
    document.getElementById('date').textContent = dateString;
  }
  
  // Perbarui waktu setiap detik
  setInterval(updateClock, 1000);
  updateClock(); // Jalankan sekali saat halaman dimuat
  