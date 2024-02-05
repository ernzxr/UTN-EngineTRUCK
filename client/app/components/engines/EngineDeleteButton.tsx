'use client';

import { removeCompatibleComponent } from "@/lib/redux/features/compatibleComponentsSlice";
import { removeEngine } from "@/lib/redux/features/enginesSlice";
import { removeFeatureDetail } from "@/lib/redux/features/featureDetailsSlice";
import { removeFeature } from "@/lib/redux/features/featuresSlice";
import { removeMedia } from "@/lib/redux/features/mediaSlice";
import { AppDispatch } from "@/lib/redux/store";
import { EngineResponse } from "@/lib/services/interfaces/engines";
import { FeatureDetailResponse } from "@/lib/services/interfaces/featureDetails";
import { MediaResponse } from "@/lib/services/interfaces/media";
import { Button } from "flowbite-react";
import { useDispatch } from "react-redux";

const EngineDeleteButton = ({ object }: { object: EngineResponse }) => {
    const dispatch = useDispatch<AppDispatch>();

    const handleDelete = async (object: EngineResponse) => {
        const removeMediaPromises: any = [];

        if (object.media.length) {
            object.media.forEach((media: MediaResponse) => {
                removeMediaPromises.push(dispatch(removeMedia(media.id)));
            });
        }

        await Promise.all(removeMediaPromises);

        const removeFeaturePromises: any = [];
        const featuresIdsDelete: any = [];

        if (object.features_details.length) {
            object.features_details.forEach((feature_detail: FeatureDetailResponse) => {
                featuresIdsDelete.push(feature_detail.feature_id);
                removeFeaturePromises.push(dispatch(removeFeatureDetail(feature_detail.id)));
            });
        }

        // Wait for all removeFeatureDetail promises to be resolved
        await Promise.all(removeFeaturePromises);

        // Now, dispatch removeFeature for each featureId
        const removeFeaturePromisesFinal: any = featuresIdsDelete.map((featureId: number) => {
            return dispatch(removeFeature(featureId));
        });

        await Promise.all(removeFeaturePromisesFinal);

        const removeCompatibleComponentsPromises: any = [];

        if (object.compatibles_components.length) {
            object.compatibles_components.forEach((compatible_component: FeatureDetailResponse) => {
                removeCompatibleComponentsPromises.push(dispatch(removeCompatibleComponent(compatible_component.id)));
            });
        }

        await Promise.all(removeCompatibleComponentsPromises);

        dispatch(removeEngine(object.id));
    }

    return (
        <Button color="failure" onClick={() => {
            handleDelete(object);
        }}>Borrar</Button>
    )
}

export default EngineDeleteButton