import iconMapper from "./mappings/AmenityIconsMapping/IconMappings.js";

export const amenityIcon = (amenity) => {
    const requiredAmenity = iconMapper(amenity)

    if(requiredAmenity) {
        return requiredAmenity

    }

    return 'DoNotDisturbAlt'
}