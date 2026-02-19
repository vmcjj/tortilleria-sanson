const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    clienteId: { type: mongoose.Schema.Types.ObjectId, required: true },
    vendedorId: { type: mongoose.Schema.Types.ObjectId, required: true },
    productos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Producto' }],
    total: { type: Number, required: true },
    estado: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);