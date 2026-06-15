import Property from "../models/property.js";

// ADD PROPERTY
export const addProperty = async (req, res) => {
  try {
    const { title, description, price, location, type, image } = req.body;

    const property = await Property.create({
      title,
      description,
      price,
      location,
      type,
      image,
      owner: req.user.id, // from JWT middleware
    });

    res.status(201).json({
      message: "Property added successfully",
      property,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET ALL PROPERTIES
export const getProperties = async (req, res) => {
  try {
    const properties = await Property.find().populate("owner", "name email");

    res.status(200).json(properties);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const deleteProperty = async (req, res) => {
  console.log("🔥 DELETE ROUTE HIT");
  console.log("Property ID:", req.params.id);

  try {
    const property = await Property.findById(req.params.id);

    if (!property) {
      return res.status(404).json({
        message: "Property not found",
      });
    }

    await Property.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Property deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message,
    });
  }
};