import { StepEdge } from 'react-flow-renderer'
import {
	smartEdgeFactory,
	svgDrawStraightLinePath,
	pathfindingJumpPointNoDiagonal
} from '../SmartEdge'
import type { FactoryOptions } from '../SmartEdge'

const StepConfiguration = {
	drawEdge: svgDrawStraightLinePath,
	fallback: StepEdge,
	generatePath: pathfindingJumpPointNoDiagonal
}

export const SmartStepEdge = smartEdgeFactory(StepConfiguration)
SmartStepEdge.displayName = 'SmartStepEdge'

export function stepEdgeFactory<
	EdgeDataType = unknown,
	NodeDataType = unknown
>({ debounceTime, gridRatio, nodePadding }: FactoryOptions<EdgeDataType>) {
	const SmartStepEdge = smartEdgeFactory<EdgeDataType, NodeDataType>({
		...StepConfiguration,
		debounceTime,
		gridRatio,
		nodePadding
	})
	SmartStepEdge.displayName = 'SmartStepEdge'
	return SmartStepEdge
}
