describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost/Tugas_Besar_Hotel/login.php')

    // Login
    cy.get('input[placeholder="Username"]').type('admin')
    cy.get('input[placeholder="Password"]').type('admin')
    cy.contains('Log In').click()
    
    // Masuk ke Halaman Data Transaksi
    cy.contains('Data Transaksi').click()
    
    // Test Case 1
    // Mencari Data Pemesan
    cy.get('input[name="pencarian"]').type('rara')
    cy.get('button[class="btn btn-success"]').click()

    // Test Case 2
    // Konfirmasi Data dengan Menyetujui
    cy.contains('Setujui').click()

    // Mencari Data Pemesan
    cy.get('input[name="pencarian"]').type('silvia')
    cy.get('button[class="btn btn-success"]').click()

    // Test Case 3
    // Konfirmasi Data dengan Membatalkan
    cy.contains('Batalkan').click()
    
    // Logout
    cy.contains('Logout').click()
  })
})