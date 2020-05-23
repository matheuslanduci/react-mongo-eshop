import Product from "../models/Product";

class ProductController {
  async index(req, res) {
    try {
      const { q = "" } = req.query;
      const products = await Product.find({
        name: {
          $regex: q,
          $options: "i"
        }
      });

      const total = await Product.find();
      res.header("X-Total-Count", total.length);

      return res.status(200).json(products);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Error 500. Internal server error." });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      if (!id)
        return res.status(400).json({
          message: "Error 400. Bad request.",
          details: "ID don't specified."
        });

      const product = await Product.findById(id);

      if (!product)
        return res.status(404).json({
          message: "Error 404. No products were found with this ID."
        });

      return res.status(200).json(product);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Error 500. Internal server error." });
    }
  }

  async store(req, res) {
    try {
      const { name, price, quantity } = req.body;

      if (!name)
        return res.status(400).json({
          message: "Error 400. Bad request.",
          details: "Name don't specified."
        });

      if (!price)
        return res.status(400).json({
          message: "Error 400. Bad request.",
          details: "Price don't specified."
        });

      if (!quantity)
        return res.status(400).json({
          message: "Error 400. Bad request.",
          details: "Quantity don't specified."
        });

      const product = await Product.create({
        name: name,
        price: price,
        quantity: quantity
      });

      return res.status(200).json(product);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Error 500. Internal server error." });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.headers;

      if (!id)
        return res.status(400).json({
          message: "Error 400. Bad request.",
          details: "ID don't specified."
        });

      const { name, price, quantity } = req.body;

      if (!name)
        return res.status(400).json({
          message: "Error 400. Bad request.",
          details: "Name don't specified."
        });

      if (!price)
        return res.status(400).json({
          message: "Error 400. Bad request.",
          details: "Price don't specified."
        });

      if (!quantity)
        return res.status(400).json({
          message: "Error 400. Bad request.",
          details: "Quantity don't specified."
        });

      const product = await Product.findByIdAndUpdate(
        id,
        {
          name: name,
          price: price,
          quantity: quantity
        },
        {
          new: true
        }
      );

      return res.status(200).json(product);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Error 500. Internal server error." });
    }
  }

  async destroy(req, res) {
    try {
      const { id } = req.headers;

      if (!id)
        return res.status(400).json({
          message: "Error 400. Bad request.",
          details: "ID don't specified."
        });

      await Product.findByIdAndDelete(id);

      return res.status(200).json({
        message: "Delete sucessful.",
        details: `Product with ID ${id} was deleted.`
      });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Error 500. Internal server error." });
    }
  }
}

export default new ProductController();
