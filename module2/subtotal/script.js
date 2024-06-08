document.addEventListener('DOMContentLoaded', () => {
    const prices = document.querySelectorAll('.price');
    const quantities = document.querySelectorAll('.quantity');
    const itemSubtotals = document.querySelectorAll('.item-subtotal');
    const subtotalDisplay = document.getElementById('subtotal');

    function calculateSubtotal() {
        let totalSubtotal = 0;

        document.querySelectorAll('.price').forEach((price, index) => {
            const quantity = document.querySelectorAll('.quantity')[index].value;
            const priceValue = parseFloat(price.textContent);
            const itemSubtotal = priceValue * quantity;
            document.querySelectorAll('.item-subtotal')[index].textContent = `$${itemSubtotal.toFixed(2)}`;
            totalSubtotal += itemSubtotal;
        });

        subtotalDisplay.textContent = `Total Subtotal: $${totalSubtotal.toFixed(2)}`;
    }

    function removeItem(event) {
        const row = event.target.closest('tr');
        row.remove();
        calculateSubtotal();
    }

    document.querySelectorAll('.quantity').forEach(quantity => {
        quantity.addEventListener('input', calculateSubtotal);
    });

    document.querySelectorAll('.remove-button').forEach(button => {
        button.addEventListener('click', removeItem);
    });

    // Initial calculation
    calculateSubtotal();
});
