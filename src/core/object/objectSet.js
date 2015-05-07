/**
 An **ObjectSet** is a set of {{#crossLink "Object"}}Objects{{/crossLink}}.

 ## Overview

 <ul>
 <li>Supports addition and removal of {{#crossLink "Object"}}Objects{{/crossLink}} by instance, ID or IFC type.</li>
 <li>Can be queried for the {{#crossLink "ObjectSet/boundary:property"}}{{/crossLink}}
 and {{#crossLink "ObjectSet/center:property"}}{{/crossLink}} of its {{#crossLink "Object"}}Objects{{/crossLink}}.</li>
 <li>Use with a {{#crossLink "ClickSelectObjects"}}{{/crossLink}} to add and remove {{#crossLink "Object"}}Objects{{/crossLink}} with mouse clicks.</li>
 <li>Can be used to mask {{#crossLink "Object"}}Objects{{/crossLink}} for Effects such as {{#crossLink "HighlightEffect"}}{{/crossLink}}, {{#crossLink "XRayEffect"}}{{/crossLink}} and
 {{#crossLink "IsolateEffect"}}{{/crossLink}}.</li>

 </ul>

 ## Examples

 #### Adding and removing Objects by ID

 Isolate objects that match given IDs, using an ObjectSet and an {{#crossLink "IsolateEffect"}}{{/crossLink}}:

 ````javascript

 // Create a Viewer
 var viewer = new BIMSURFER.Viewer(null, "myDiv", {}, false);

 // Create a Camera
 var camera = new BIMSURFER.Camera(viewer, {
    eye: [0, 0, -10]
 });

 // Create a CameraControl to interact with the Camera
 var cameraControl = new BIMSURFER.CameraControl(viewer, {
    camera: camera
 });

 // Create some BoxObjects

 new BIMSURFER.BoxObject(viewer, {
    objectId: "foo",
    ifcType: "IfcWall",
    matrix: BIMSURFER.math.translationMat4v([-4, 0, -4])
 });

 new BIMSURFER.BoxObject(viewer, {
    objectId: "bar",
    ifcType: "IfcWall",
    matrix: BIMSURFER.math.translationMat4v([4, 0, -4])
 });

 new BIMSURFER.BoxObject(viewer, {
    objectId: "baz",
    ifcType: "IfcBeam",
    matrix: BIMSURFER.math.translationMat4v([-4, 0, 4])
 });

 // Create an ObjectSet
 var objectSet = new BIMSURFER.ObjectSet(viewer);

 // Apply an Isolate effect to the ObjectSet
 var isolateEffect = new BIMSURFER.IsolateEffect(viewer, {
        objectSet: objectSet
 });

 // Add Objects to the ObjectSet by ID
 // These Objects become visible
 objectSet.addObjectIds(["foo", "bar", "baz"]);

 // Remove an Object from the ObjectSet by ID
 // That Object becomes invisible again
 objectSet.removeObjectIds(["baz"]);

 ````

 #### Adding and removing Objects by IFC type

 X-ray and highlight objects that match given IFC types, using an ObjectSet, {{#crossLink "XRayEffect"}}{{/crossLink}} and {{#crossLink "HighlightEffect"}}{{/crossLink}}:

 ````javascript

 // Create a Viewer
 var viewer = new BIMSURFER.Viewer(null, "myDiv", {}, false);

 // Create a Camera
 var camera = new BIMSURFER.Camera(viewer, {
    eye: [0, 0, -10]
 });

 // Create a CameraControl to interact with the Camera
 var cameraControl = new BIMSURFER.CameraControl(viewer, {
    camera: camera
 });

 // Create some BoxObjects

 new BIMSURFER.BoxObject(viewer, {
    objectId: "foo",
    ifcType: "IfcWall",
    matrix: BIMSURFER.math.translationMat4v([-4, 0, -4])
 });

 new BIMSURFER.BoxObject(viewer, {
    objectId: "bar",
    ifcType: "IfcWall",
    matrix: BIMSURFER.math.translationMat4v([4, 0, -4])
 });

 new BIMSURFER.Object(viewer, {
    objectId: "baz",
    ifcType: "IfcBeam",
    matrix: BIMSURFER.math.translationMat4v([-4, 0, 4])
 });

 // Create an ObjectSet
 var objectSet = new BIMSURFER.ObjectSet(viewer);

 // Apply an X-Ray effect to the ObjectSet
 var xrayEffect = new BIMSURFER.XRayEffect(viewer, {
    objectSet: objectSet
 });

 // Apply a Highlight effect to the ObjectSet
 var highlightEffect = new BIMSURFER.HighlightEffect(viewer, {
    objectSet: objectSet
 });

 // Add Objects to the ObjectSet by IFC type
 // These Objects become opaque and highlighted
 objectSet.addTypes(["IfcWall", "IfcBeam"]);

 // Remove an Object from the ObjectSet by IFC type
 // That Object becomes transparent and non-highlighted
 objectSet.removeTypes(["IfcWall"]);

 ````

 #### Using with a ClickSelectObjects

 Highlighting clicked objects, using an ObjectSet, {{#crossLink "HighlightEffect"}}{{/crossLink}} and {{#crossLink "ClickSelectObjects"}}{{/crossLink}}:

 ````javascript

 // Create a Viewer
 var viewer = new BIMSURFER.Viewer(null, "myDiv", {}, false);

 // Create a Camera
 var camera = new BIMSURFER.Camera(viewer, {
    eye: [0, 0, -10]
 });

 // Create a CameraControl to interact with the Camera
 var cameraControl = new BIMSURFER.CameraControl(viewer, {
    camera: camera
 });

 // Create some BoxObjects

 new BIMSURFER.BoxObject(viewer, {
    objectId: "foo",
    ifcType: "IfcWall",
    matrix: BIMSURFER.math.translationMat4v([-4, 0, -4])
 });

 new BIMSURFER.BoxObject(viewer, {
    objectId: "bar",
    ifcType: "IfcWall",
    matrix: BIMSURFER.math.translationMat4v([4, 0, -4])
 });

 new BIMSURFER.Object(viewer, {
    objectId: "baz",
    ifcType: "IfcBeam",
    matrix: BIMSURFER.math.translationMat4v([-4, 0, 4])
 });

 // Create an ObjectSet
 var objectSet = new BIMSURFER.ObjectSet(viewer);

 // Apply a Highlight effect to the ObjectSet
 var highlightEffect = new BIMSURFER.HighlightEffect(viewer, {
        objectSet: objectSet
    });

 // Create a ClickSelectObjects control, which will add and remove objects to and from the ObjectSet
 // to and from the ObjectSet as we click them
 var clickSelect = new BIMSURFER.ClickSelectObjects(viewer, {
        objectSet: objectSet
    });
 ````

 #### Boundaries

 TODO

 @class ObjectSet
 @module BIMSURFER
 @constructor
 @param [viewer] {Viewer} Parent {{#crossLink "Viewer"}}{{/crossLink}}.
 @param [cfg] {*} Configs
 @param [cfg.id] {String} Optional ID, unique among all components in the parent viewer, generated automatically when omitted.
 @param [cfg.meta] {String:Object} Optional map of user-defined metadata to attach to this Selection.
 @param [cfg.objects] {{Array of String|Object}} Array of {{#crossLink "Object"}}{{/crossLink}} IDs or instances.
 @extends Component
 */
(function () {

    "use strict";

    BIMSURFER.ObjectSet = BIMSURFER.Component.extend({

        /**
         JavaScript class name for this Component.

         @property className
         @type String
         @final
         */
        className: "BIMSURFER.ObjectSet",

        _init: function (cfg) {

            var self = this;

            /**
             * The {{#crossLink "Objects"}}{{/crossLink}} within this ObjectSet, mapped to their IDs.
             *
             * Fires an {{#crossLink "ObjectSet/updated:event"}}{{/crossLink}} event on change.
             *
             * @property objects
             * @type {{String:Object}}
             */
            this.objects = {};

            // Subscribe to each Object's transform matrix
            // so we can mark selection boundary dirty
            this._onObjectMatrix = {};

            /**
             * The number of {{#crossLink "Objects"}}{{/crossLink}} within this ObjectSet.
             *
             * @property numObjects
             * @type Number
             */
            this.numObjects = 0;

            this._boundary = {xmin: 0.0, ymin: 0.0, zmin: 0.0, xmax: 0.0, ymax: 0.0, zmax: 0.0 };
            this._center = [0, 0, 0];

            this._boundaryDirty = true;

            this._onComponentDestroyed = this.viewer.on("componentDestroyed",
                function (component) {

                    if (self.objects[component.id]) {

                        delete self.objects[component.id];

                        self._boundaryDirty = true;

                        /**
                         * Fired whenever {{#crossLink "Object"}}Objects{{/crossLink}} are added or removed from this ObjectSet.
                         *
                         * Note that this event also indicates that the ObjectSet's {{#crossLink "ObjectSet/boundary:property"}}{{/crossLink}}
                         * and {{#crossLink "ObjectSet/center:property"}}{{/crossLink}} will have updated, accordingly.
                         *
                         * @event updated
                         * @param e The event
                         * @param Boolean [cleared
                         * @param [e.removed] Info on removed Objects
                         * @param {Array of String} [e.removed.objectIds] IDs of removed Objects, when they were removed by ID
                         * @param {{Array of String} [e.removed.ifcTypes] IFC types of removed Objects, when they were removed by IFC type
                         * @param {} [e.added] Info on added Objects
                         * @param {Array of String} [e.added.objectIds] IDs of added Objects, when they were added by ID
                         * @param {Array of String} [e.added.ifcTypes] IFC types of added Objects, when they were added by IFC type
                         */
                        self.fire("updated", {
                            removed: {
                                objectIds: [component.id]
                            }
                        });
                    }
                });

            if (cfg.objects) {
                this.addObjects(cfg.objects);
            }

            if (cfg.objectIds) {
                this.addObjectIds(cfg.objectIds);
            }

            if (cfg.types) {
                this.addTypes(cfg.types);
            }
        },

        /**
         * Removes all {{#crossLink "Object"}}Objects{{/crossLink}} from this ObjectSet.
         *
         * Fires an {{#crossLink "ObjectSet/updated:event"}}{{/crossLink}} event.
         *
         * @method clear
         */
        clear: function () {
            for (var objectId in this.objects) {
                if (this.objects.hasOwnProperty(objectId)) {
                    this._removeObject(this.objects[objectId]);
                }
            }

            this.fire("updated", {
                cleared: true
            });
        },

        /**
         * Adds {{#crossLink "Object"}}Objects{{/crossLink}} instances to this ObjectSet.
         *
         * The {{#crossLink "Object"}}Objects{{/crossLink}} must be in the same {{#crossLink "Viewer"}}{{/crossLink}} as this ObjectSet.
         *
         * Fires an {{#crossLink "ObjectSet/updated:event"}}{{/crossLink}} event.
         *
         * @method addObjects
         * @param {Array of Objects} objects Array of {{#crossLink "Object"}}Objects{{/crossLink}} instances.
         */
        addObjects: function (objects) {

            for (var i = 0, len = objects.length; i < len; i++) {
                this._addObject(objects[i]);
            }

            this.fire("updated", {
                added: {
                    objects: objects
                }
            });
        },

        _addObject: function (object) {

            var objectId = object.id;

            // Ensure Object is in same Viewer as this Selection
            if (object.viewer != this.viewer) {
                this.warn("Attempted to add object that's not in same BIMSURFER.Viewer: '" + objectId + "'");
                return;
            }

            // Subscribe to each Object's transform matrix
            // so we can mark selection boundary dirty
            this._onObjectMatrix[objectId] = object.on("matrix",
                function () {
                    self._boundaryDirty = true;
                });

            this.objects[objectId] = object;
            this.numObjects++;

            this._boundaryDirty = true;
        },

        _removeObject: function (object) {

            var objectId = object.id;

            if (object.viewer != this.viewer) {
                this.warn("Attempted to remove object that's not in same BIMSURFER.Viewer: '" + objectId + "'");
                return;
            }

            object.off(this._onObjectMatrix[objectId]);

            delete this.objects[objectId];
            this.numObjects--;

            this._boundaryDirty = true;
        },

        /**
         * Removes {{#crossLink "Object"}}Objects{{/crossLink}} instances from this ObjectSet.
         *
         * The {{#crossLink "Object"}}Objects{{/crossLink}} must be in the same {{#crossLink "Viewer"}}{{/crossLink}} as this ObjectSet.
         *
         * Fires an {{#crossLink "ObjectSet/updated:event"}}{{/crossLink}} event.
         *
         * @method removeObjects
         * @param {Array of Objects} objects Array of {{#crossLink "Object"}}Objects{{/crossLink}} instances.
         */
        removeObjects: function (objects) {

            for (var i = 0, len = objects.length; i < len; i++) {
                this._removeObject(objects[i]);
            }

            this.fire("updated", {
                removed: {
                    objects: objects
                }
            });
        },

        /**
         * Adds {{#crossLink "Object"}}Objects{{/crossLink}} by ID to this ObjectSet.
         *
         * The {{#crossLink "Object"}}Objects{{/crossLink}} must be in the same {{#crossLink "Viewer"}}{{/crossLink}} as this ObjectSet.
         *
         * Fires an {{#crossLink "ObjectSet/updated:event"}}{{/crossLink}} event.
         *
         * @method addObjectIds
         * @param {Array of String} objects Array of {{#crossLink "Object"}}Object{{/crossLink}} IDs.
         */
        addObjectIds: function (objectIds) {

            var objectId;
            var object;

            for (var i = 0, len = objectIds.length; i < len; i++) {

                objectId = objectIds[i];
                object = this.viewer.components[objectId];

                if (!object) {
                    this.warn("addObjectIds - object not found: '" + objectId + "'");
                    continue;
                }

                this._addObject(object);
            }

            this.fire("updated", {
                added: {
                    objectIds: objectIds
                }
            });
        },

        /**
         * Removes {{#crossLink "Object"}}Objects{{/crossLink}} by ID from this ObjectSet.
         *
         * The {{#crossLink "Object"}}Objects{{/crossLink}} must be in the same {{#crossLink "Viewer"}}{{/crossLink}} as this ObjectSet.
         *
         * Fires an {{#crossLink "ObjectSet/updated:event"}}{{/crossLink}} event.
         *
         * @method removeObjectIds
         * @param {Array of String} objects Array of {{#crossLink "Object"}}Object{{/crossLink}} IDs.
         */
        removeObjectIds: function (objectIds) {

            var objectId;
            var object;

            for (var i = 0, len = objectIds.length; i < len; i++) {

                objectId = objectIds[i];
                object = this.viewer.components[objectId];

                if (!object) {
                    this.warn("removeObjectIds - object not found: '" + objectId + "'");
                    continue;
                }

                this._removeObject(object);
            }

            this.fire("updated", {
                removed: {
                    objectIds: objectIds
                }
            });
        },

        /**
         * Adds {{#crossLink "Object"}}Objects{{/crossLink}} by IFC type to this ObjectSet.
         *
         * The {{#crossLink "Object"}}Objects{{/crossLink}} must be in the same {{#crossLink "Viewer"}}{{/crossLink}} as this ObjectSet.
         *
         * Fires an {{#crossLink "ObjectSet/updated:event"}}{{/crossLink}} event.
         *
         * @method addTypes
         * @param {Array of String} objects Array of IFC types.
         */
        addTypes: function (types) {

            var type;
            var t;
            var objectId;
            var object;

            for (var i = 0, len = types.length; i < len; i++) {

                type = types[i];
                t = this.viewer.types[type];

                if (!t) {
                    this.warn("addTypes - type not found: '" + t + "'");
                    continue;
                }

                for (objectId in t) {
                    if (t.hasOwnProperty(objectId)) {
                        this._addObject(t[objectId]);
                    }
                }
            }

            this.fire("updated", {
                added: {
                    types: types
                }
            });
        },

        /**
         * Removes {{#crossLink "Object"}}Objects{{/crossLink}} by IFC type from this ObjectSet.
         *
         * The {{#crossLink "Object"}}Objects{{/crossLink}} must be in the same {{#crossLink "Viewer"}}{{/crossLink}} as this ObjectSet.
         *
         * Fires an {{#crossLink "ObjectSet/updated:event"}}{{/crossLink}} event.
         *
         * @method removeTypes
         * @param {Array of String} objects Array of IFC types.
         */
        removeTypes: function (types) {

            var type;
            var t;
            var objectId;

            for (var i = 0, len = types.length; i < len; i++) {

                type = types[i];
                t = this.viewer.types[type];

                if (!t) {
                    this.warn("removeTypes - type not found: '" + type + "'");
                    continue;
                }

                for (objectId in t) {
                    if (t.hasOwnProperty(objectId)) {
                        this._removeObject(this.objects[objectId]);
                    }
                }
            }

            this.fire("updated", {
                removed: {
                    types: types
                }
            });
        },

        /**
         * Iterates with a callback over the {{#crossLink "Object"}}Objects{{/crossLink}} in this ObjectSet.
         *
         * @method withObjects
         * @param {Function} callback Callback called for each {{#crossLink "Object"}}{{/crossLink}}.
         */
        withObjects: function (callback) {
            for (var objectId in this.objects) {
                if (this.objects.hasOwnProperty(objectId)) {
                    callback(this.objects[objectId]);
                }
            }
        },

        _rebuildBoundary: function () {

            if (!this._boundaryDirty) {
                return;
            }

            // For an empty selection, boundary is zero volume and centered at the origin

            if (this.numObjects === 0) {
                this._boundary.xmin = 0.0;
                this._boundary.ymin = 0.0;
                this._boundary.zmin = 0.0;
                this._boundary.xmax = 0.0;
                this._boundary.ymax = 0.0;
                this._boundary.zmax = 0.0;

            } else {

                // Set boundary inside-out, ready to expand by each selected object

                this._boundary.xmin = 1000000.0;
                this._boundary.ymin = 1000000.0;
                this._boundary.zmin = 1000000.0;
                this._boundary.xmax = -1000000.0;
                this._boundary.ymax = -1000000.0;
                this._boundary.zmax = -1000000.0;

                var object;
                var boundary;

                for (var objectId in this.objects) {
                    if (this.objects.hasOwnProperty(objectId)) {

                        object = this.objects[objectId];

                        boundary = object.boundary;

                        if (boundary.xmin < this._boundary.xmin) {
                            this._boundary.xmin = boundary.xmin;
                        }
                        if (boundary.ymin < this._boundary.ymin) {
                            this._boundary.ymin = boundary.ymin;
                        }
                        if (boundary.zmin < this._boundary.zmin) {
                            this._boundary.zmin = boundary.zmin;
                        }
                        if (boundary.xmax > this._boundary.xmax) {
                            this._boundary.xmax = boundary.xmax;
                        }
                        if (boundary.ymax > this._boundary.ymax) {
                            this._boundary.ymax = boundary.ymax;
                        }
                        if (boundary.zmax > this._boundary.zmax) {
                            this._boundary.zmax = boundary.zmax;
                        }
                    }
                }
            }

            this._center[0] = (this._boundary.xmax + this._boundary.xmin) * 0.5;
            this._center[1] = (this._boundary.ymax + this._boundary.ymin) * 0.5;
            this._center[2] = (this._boundary.zmax + this._boundary.zmin) * 0.5;

            this._boundaryDirty = false;
        },

        _props: {

            /**
             * The axis-aligned World-space boundary of the {{#crossLink "Object"}}Objects{{/crossLink}} within this ObjectSet.
             *
             * @property boundary
             * @readonly
             * @type {{}}
             */
            boundary: {

                get: function () {

                    if (this._boundaryDirty) {

                        this._rebuildBoundary();

                        return this._boundary;
                    }
                }
            },

            /**
             * The World-space center of the {{#crossLink "Object"}}Objects{{/crossLink}} within this ObjectSet.
             *
             * @property center
             * @readonly
             * @type {{}}
             */
            center: {

                get: function () {

                    if (this._boundaryDirty) {

                        this._rebuildBoundary();

                        return this._center;
                    }
                }
            }
        },

        _destroy: function () {

            this.clear();

            this.viewer.off(this._onComponentDestroyed);

            this.active = false;
        }
    });

})();