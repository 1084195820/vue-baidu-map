import createClass from './create-class.js'

const instanceFunctions = [
  'addContextMenu',
  'addControl',
  'addHotspot',
  'addOverlay',
  'addTileLayer',
  'centerAndZoom',
  'checkResize',
  'clearHotspots',
  'clearOverlays',
  'closeInfoWindow',
  'disable3DBuilding',
  'disableAutoResize',
  'disableContinuousZoom',
  'disableDoubleClickZoom',
  'disableDragging',
  'disableInertialDragging',
  'disableKeyboard',
  'disablePinchToZoom',
  'disableScrollWheelZoom',
  'enable3DBuilding',
  'enableAutoResize',
  'enableContinuousZoom',
  'enableDoubleClickZoom',
  'enableDragging',
  'enableInertialDragging',
  'enableKeyboard',
  'enablePinchToZoom',
  'enableScrollWheelZoom',
  'getBounds',
  'getCenter',
  'getContainer',
  'getCurrentCity',
  'getDefaultCursor',
  'getDistance',
  'getDraggingCursor',
  'getInfoWindow',
  'getKey',
  'getMapType',
  'getOverlays',
  'getPanes',
  'getPanorama',
  'getSize',
  'getViewport',
  'getZoom',
  'highResolutionEnabled',
  'openInfoWindow',
  'overlayPixelToPoint',
  'panBy',
  'panTo',
  'pixelToPoint',
  'pointToOverlayPixel',
  'pointToPixel',
  'pointToPixelFor3D',
  'removeContextMenu',
  'removeControl',
  'removeHotspot',
  'removeOverlay',
  'removeTileLayer',
  'reset',
  'selectBaseElement',
  'setCenter',
  'setCurrentCity',
  'setDefaultCursor',
  'setDraggingCursor',
  'setFeatureStyle',
  'setMapStyle',
  'setMapType',
  'setMaxZoom',
  'setMinZoom',
  'setPanorama',
  'setSize',
  'setViewport',
  'setZoom',
  'zoomIn',
  'zoomOut',
  'zoomTo'
]

export default createClass(instanceFunctions)
