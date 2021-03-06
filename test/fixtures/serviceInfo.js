module.exports = { currentVersion: 10.21,
  id: 0,
  name: 'Flag Pole',
  type: 'Feature Layer',
  description: '',
  geometryType: 'esriGeometryPoint',
  copyrightText: '',
  parentLayer: null,
  subLayers: [],
  minScale: 0,
  maxScale: 0,
  drawingInfo: 
   { renderer: { type: 'simple', symbol: [Object], label: '', description: '' },
     transparency: 0,
     labelingInfo: null },
  defaultVisibility: false,
  extent: 
   { xmin: 1007506.7600000054,
     ymin: 822521.5100000054,
     xmax: 1029295.9189999998,
     ymax: 854871.5540000051,
     spatialReference: { wkid: 102656, latestWkid: 2234 } },
  hasAttachments: false,
  htmlPopupType: 'esriServerHTMLPopupTypeAsHTMLText',
  displayField: 'CODE',
  typeIdField: null,
  fields: 
   [ { name: 'OBJECTID',
       type: 'esriFieldTypeOID',
       alias: 'OBJECTID',
       domain: null },
     { name: 'CODE',
       type: 'esriFieldTypeString',
       alias: 'CODE',
       length: 25,
       domain: null },
     { name: 'SOURCE',
       type: 'esriFieldTypeString',
       alias: 'SOURCE',
       length: 25,
       domain: null },
     { name: 'DATE_ADDED',
       type: 'esriFieldTypeString',
       alias: 'DATE_ADDED',
       length: 12,
       domain: null },
     { name: 'Scale',
       type: 'esriFieldTypeString',
       alias: 'Scale',
       length: 50,
       domain: null },
     { name: 'GlobalID',
       type: 'esriFieldTypeGlobalID',
       alias: 'GlobalID',
       length: 38,
       domain: null },
     { name: 'SHAPE',
       type: 'esriFieldTypeGeometry',
       alias: 'SHAPE',
       domain: null } ],
  relationships: [],
  canModifyLayer: false,
  canScaleSymbols: false,
  hasLabels: false,
  capabilities: 'Map,Query,Data',
  maxRecordCount: 1000,
  supportsStatistics: true,
  supportsAdvancedQueries: true,
  hasZ: true,
  supportedQueryFormats: 'JSON, AMF',
  isDataVersioned: true,
  ownershipBasedAccessControlForFeatures: { allowOthersToQuery: true },
  useStandardizedQueries: true };
