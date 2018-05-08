webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/ConsultationInformation/ConsultationInformation.component.css":
/***/ (function(module, exports) {

module.exports = "{}\n"

/***/ }),

/***/ "./src/app/ConsultationInformation/ConsultationInformation.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" id=\"addAssetModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"addAssetModalLabel\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title\" id=\"addAssetModalLabel\">Add Asset</h4>\n      </div>\n      <form [formGroup]=\"myForm\">\n        <div class=\"modal-body\">\n\n\n          \n\n            \n              <div class=\"form-group text-left\">\n                <label for=\"patientId\">patientId</label>\n                \n                  <input formControlName=\"patientId\" type=\"text\" class=\"form-control\">\n                \n              </div>\n            \n          \n\n            \n              <div class=\"form-group text-left\">\n                <label for=\"consultationId\">consultationId</label>\n                \n                  <input formControlName=\"consultationId\" type=\"text\" class=\"form-control\">\n                \n              </div>\n            \n          \n\n            \n              <label for=\"consultationType\">consultationType</label>\n              <div class=\"checkbox\">\n                \n                  <label>\n                    <input\n                      \n                        formControlName=\"consultationType\"\n                      \n                      name=\"consultationType\"\n                      value=\"CLINICAL\"\n                      type=\"radio\"\n                      \n                    />\n                    CLINICAL\n                  </label>\n                \n                  <label>\n                    <input\n                      \n                        formControlName=\"consultationType\"\n                      \n                      name=\"consultationType\"\n                      value=\"SURGERY\"\n                      type=\"radio\"\n                      \n                    />\n                    SURGERY\n                  </label>\n                \n                  <label>\n                    <input\n                      \n                        formControlName=\"consultationType\"\n                      \n                      name=\"consultationType\"\n                      value=\"IMMUNIZATION\"\n                      type=\"radio\"\n                      \n                    />\n                    IMMUNIZATION\n                  </label>\n                \n              </div>\n            \n          \n\n            \n              <div class=\"form-group text-left\">\n                <label for=\"dateOfConsultation\">dateOfConsultation</label>\n                \n                  <input formControlName=\"dateOfConsultation\" type=\"text\" class=\"form-control\">\n                \n              </div>\n            \n          \n\n            \n              <label for=\"consultationDisease\">consultationDisease</label>\n              <div class=\"checkbox\">\n                \n                  <label>\n                    <input\n                      \n                        formControlName=\"consultationDisease\"\n                      \n                      name=\"consultationDisease\"\n                      value=\"CARDIOVASCULAR\"\n                      type=\"radio\"\n                      \n                    />\n                    CARDIOVASCULAR\n                  </label>\n                \n                  <label>\n                    <input\n                      \n                        formControlName=\"consultationDisease\"\n                      \n                      name=\"consultationDisease\"\n                      value=\"CANCER\"\n                      type=\"radio\"\n                      \n                    />\n                    CANCER\n                  </label>\n                \n                  <label>\n                    <input\n                      \n                        formControlName=\"consultationDisease\"\n                      \n                      name=\"consultationDisease\"\n                      value=\"CHRONIC_LOWER_RESPIRATORY_DISEASE\"\n                      type=\"radio\"\n                      \n                    />\n                    CHRONIC_LOWER_RESPIRATORY_DISEASE\n                  </label>\n                \n                  <label>\n                    <input\n                      \n                        formControlName=\"consultationDisease\"\n                      \n                      name=\"consultationDisease\"\n                      value=\"STROKE\"\n                      type=\"radio\"\n                      \n                    />\n                    STROKE\n                  </label>\n                \n                  <label>\n                    <input\n                      \n                        formControlName=\"consultationDisease\"\n                      \n                      name=\"consultationDisease\"\n                      value=\"ANDROPAUSE\"\n                      type=\"radio\"\n                      \n                    />\n                    ANDROPAUSE\n                  </label>\n                \n                  <label>\n                    <input\n                      \n                        formControlName=\"consultationDisease\"\n                      \n                      name=\"consultationDisease\"\n                      value=\"ARTHRITIS\"\n                      type=\"radio\"\n                      \n                    />\n                    ARTHRITIS\n                  </label>\n                \n                  <label>\n                    <input\n                      \n                        formControlName=\"consultationDisease\"\n                      \n                      name=\"consultationDisease\"\n                      value=\"ACUTE_BRONCHITIS\"\n                      type=\"radio\"\n                      \n                    />\n                    ACUTE_BRONCHITIS\n                  </label>\n                \n                  <label>\n                    <input\n                      \n                        formControlName=\"consultationDisease\"\n                      \n                      name=\"consultationDisease\"\n                      value=\"BURN\"\n                      type=\"radio\"\n                      \n                    />\n                    BURN\n                  </label>\n                \n                  <label>\n                    <input\n                      \n                        formControlName=\"consultationDisease\"\n                      \n                      name=\"consultationDisease\"\n                      value=\"CROHNS\"\n                      type=\"radio\"\n                      \n                    />\n                    CROHNS\n                  </label>\n                \n                  <label>\n                    <input\n                      \n                        formControlName=\"consultationDisease\"\n                      \n                      name=\"consultationDisease\"\n                      value=\"DEPRESSION\"\n                      type=\"radio\"\n                      \n                    />\n                    DEPRESSION\n                  </label>\n                \n                  <label>\n                    <input\n                      \n                        formControlName=\"consultationDisease\"\n                      \n                      name=\"consultationDisease\"\n                      value=\"DIARRHEA\"\n                      type=\"radio\"\n                      \n                    />\n                    DIARRHEA\n                  </label>\n                \n                  <label>\n                    <input\n                      \n                        formControlName=\"consultationDisease\"\n                      \n                      name=\"consultationDisease\"\n                      value=\"DERMATITIS\"\n                      type=\"radio\"\n                      \n                    />\n                    DERMATITIS\n                  </label>\n                \n                  <label>\n                    <input\n                      \n                        formControlName=\"consultationDisease\"\n                      \n                      name=\"consultationDisease\"\n                      value=\"ENDOMETRIOSIS\"\n                      type=\"radio\"\n                      \n                    />\n                    ENDOMETRIOSIS\n                  </label>\n                \n                  <label>\n                    <input\n                      \n                        formControlName=\"consultationDisease\"\n                      \n                      name=\"consultationDisease\"\n                      value=\"EPILEPSY\"\n                      type=\"radio\"\n                      \n                    />\n                    EPILEPSY\n                  </label>\n                \n                  <label>\n                    <input\n                      \n                        formControlName=\"consultationDisease\"\n                      \n                      name=\"consultationDisease\"\n                      value=\"FIBROMYALGIA\"\n                      type=\"radio\"\n                      \n                    />\n                    FIBROMYALGIA\n                  </label>\n                \n                  <label>\n                    <input\n                      \n                        formControlName=\"consultationDisease\"\n                      \n                      name=\"consultationDisease\"\n                      value=\"DVT\"\n                      type=\"radio\"\n                      \n                    />\n                    DVT\n                  </label>\n                \n                  <label>\n                    <input\n                      \n                        formControlName=\"consultationDisease\"\n                      \n                      name=\"consultationDisease\"\n                      value=\"HERPES\"\n                      type=\"radio\"\n                      \n                    />\n                    HERPES\n                  </label>\n                \n                  <label>\n                    <input\n                      \n                        formControlName=\"consultationDisease\"\n                      \n                      name=\"consultationDisease\"\n                      value=\"GONORRHEA\"\n                      type=\"radio\"\n                      \n                    />\n                    GONORRHEA\n                  </label>\n                \n                  <label>\n                    <input\n                      \n                        formControlName=\"consultationDisease\"\n                      \n                      name=\"consultationDisease\"\n                      value=\"GOUT\"\n                      type=\"radio\"\n                      \n                    />\n                    GOUT\n                  </label>\n                \n                  <label>\n                    <input\n                      \n                        formControlName=\"consultationDisease\"\n                      \n                      name=\"consultationDisease\"\n                      value=\"GYNECOMASTIA\"\n                      type=\"radio\"\n                      \n                    />\n                    GYNECOMASTIA\n                  </label>\n                \n                  <label>\n                    <input\n                      \n                        formControlName=\"consultationDisease\"\n                      \n                      name=\"consultationDisease\"\n                      value=\"MYOCARDIAL_INFARCTION\"\n                      type=\"radio\"\n                      \n                    />\n                    MYOCARDIAL_INFARCTION\n                  </label>\n                \n                  <label>\n                    <input\n                      \n                        formControlName=\"consultationDisease\"\n                      \n                      name=\"consultationDisease\"\n                      value=\"HEMORRHOIDS\"\n                      type=\"radio\"\n                      \n                    />\n                    HEMORRHOIDS\n                  </label>\n                \n                  <label>\n                    <input\n                      \n                        formControlName=\"consultationDisease\"\n                      \n                      name=\"consultationDisease\"\n                      value=\"HIV\"\n                      type=\"radio\"\n                      \n                    />\n                    HIV\n                  </label>\n                \n                  <label>\n                    <input\n                      \n                        formControlName=\"consultationDisease\"\n                      \n                      name=\"consultationDisease\"\n                      value=\"AIDS\"\n                      type=\"radio\"\n                      \n                    />\n                    AIDS\n                  </label>\n                \n              </div>\n            \n          \n\n            \n              <div class=\"form-group text-left\">\n                <label for=\"consultationPrescription\">consultationPrescription</label>\n                \n                    <textarea formControlName=\"consultationPrescription\" class=\"form-control\" rows=\"3\"></textarea>\n                \n              </div>\n            \n          \n\n            \n              <div class=\"form-group text-left\">\n                <label for=\"consultationImmunization\">consultationImmunization</label>\n                \n                    <textarea formControlName=\"consultationImmunization\" class=\"form-control\" rows=\"3\"></textarea>\n                \n              </div>\n            \n          \n\n        </div>\n        <div class=\"modal-footer\">\n          <button (click)=\"addAsset(myForm);\" type=\"submit\" class=\"btn btn-success\" data-dismiss=\"modal\">Submit</button>\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n\n\n\n<div class=\"modal fade\" id=\"updateAssetModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"updateAssetModalLabel\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title\" id=\"updateAssetModalLabel\">Update Asset</h4>\n      </div>\n      <form [formGroup]=\"myForm\">\n        <div class=\"modal-body\">\n\n\n          \n            <div class=\"form-group text-left\">\n              <label for=\"patientId\">patientId</label>\n\n              \n                <input [ngModel]=\"patientId\"formControlName=\"patientId\" type=\"text\" class=\"form-control\">\n              \n\n            </div>\n          \n            <div class=\"form-group text-left\">\n              <label for=\"consultationId\">consultationId</label>\n\n              \n                <input [ngModel]=\"consultationId\"formControlName=\"consultationId\" type=\"text\" class=\"form-control\">\n              \n\n            </div>\n          \n            <div class=\"form-group text-left\">\n              <label for=\"consultationType\">consultationType</label>\n\n              \n                \n                  <div class=\"row\">\n                    <div class=\"col-xs-12 checkbox\">\n                    \n                      <label>\n                        <input\n                          \n                            formControlName=\"consultationType\"\n                            [ngModel]=\"consultationType\"\n                          \n                          name=\"consultationType\"\n                          value=\"CLINICAL\"\n                          type=\"radio\"\n                          \n                        />\n                        CLINICAL\n                      </label>\n                    \n                      <label>\n                        <input\n                          \n                            formControlName=\"consultationType\"\n                            [ngModel]=\"consultationType\"\n                          \n                          name=\"consultationType\"\n                          value=\"SURGERY\"\n                          type=\"radio\"\n                          \n                        />\n                        SURGERY\n                      </label>\n                    \n                      <label>\n                        <input\n                          \n                            formControlName=\"consultationType\"\n                            [ngModel]=\"consultationType\"\n                          \n                          name=\"consultationType\"\n                          value=\"IMMUNIZATION\"\n                          type=\"radio\"\n                          \n                        />\n                        IMMUNIZATION\n                      </label>\n                    \n                    </div>\n                  </div>\n                \n              \n\n            </div>\n          \n            <div class=\"form-group text-left\">\n              <label for=\"dateOfConsultation\">dateOfConsultation</label>\n\n              \n                <input [ngModel]=\"dateOfConsultation\"formControlName=\"dateOfConsultation\" type=\"text\" class=\"form-control\">\n              \n\n            </div>\n          \n            <div class=\"form-group text-left\">\n              <label for=\"consultationDisease\">consultationDisease</label>\n\n              \n                \n                  <div class=\"row\">\n                    <div class=\"col-xs-12 checkbox\">\n                    \n                      <label>\n                        <input\n                          \n                            formControlName=\"consultationDisease\"\n                            [ngModel]=\"consultationDisease\"\n                          \n                          name=\"consultationDisease\"\n                          value=\"CARDIOVASCULAR\"\n                          type=\"radio\"\n                          \n                        />\n                        CARDIOVASCULAR\n                      </label>\n                    \n                      <label>\n                        <input\n                          \n                            formControlName=\"consultationDisease\"\n                            [ngModel]=\"consultationDisease\"\n                          \n                          name=\"consultationDisease\"\n                          value=\"CANCER\"\n                          type=\"radio\"\n                          \n                        />\n                        CANCER\n                      </label>\n                    \n                      <label>\n                        <input\n                          \n                            formControlName=\"consultationDisease\"\n                            [ngModel]=\"consultationDisease\"\n                          \n                          name=\"consultationDisease\"\n                          value=\"CHRONIC_LOWER_RESPIRATORY_DISEASE\"\n                          type=\"radio\"\n                          \n                        />\n                        CHRONIC_LOWER_RESPIRATORY_DISEASE\n                      </label>\n                    \n                      <label>\n                        <input\n                          \n                            formControlName=\"consultationDisease\"\n                            [ngModel]=\"consultationDisease\"\n                          \n                          name=\"consultationDisease\"\n                          value=\"STROKE\"\n                          type=\"radio\"\n                          \n                        />\n                        STROKE\n                      </label>\n                    \n                      <label>\n                        <input\n                          \n                            formControlName=\"consultationDisease\"\n                            [ngModel]=\"consultationDisease\"\n                          \n                          name=\"consultationDisease\"\n                          value=\"ANDROPAUSE\"\n                          type=\"radio\"\n                          \n                        />\n                        ANDROPAUSE\n                      </label>\n                    \n                      <label>\n                        <input\n                          \n                            formControlName=\"consultationDisease\"\n                            [ngModel]=\"consultationDisease\"\n                          \n                          name=\"consultationDisease\"\n                          value=\"ARTHRITIS\"\n                          type=\"radio\"\n                          \n                        />\n                        ARTHRITIS\n                      </label>\n                    \n                      <label>\n                        <input\n                          \n                            formControlName=\"consultationDisease\"\n                            [ngModel]=\"consultationDisease\"\n                          \n                          name=\"consultationDisease\"\n                          value=\"ACUTE_BRONCHITIS\"\n                          type=\"radio\"\n                          \n                        />\n                        ACUTE_BRONCHITIS\n                      </label>\n                    \n                      <label>\n                        <input\n                          \n                            formControlName=\"consultationDisease\"\n                            [ngModel]=\"consultationDisease\"\n                          \n                          name=\"consultationDisease\"\n                          value=\"BURN\"\n                          type=\"radio\"\n                          \n                        />\n                        BURN\n                      </label>\n                    \n                      <label>\n                        <input\n                          \n                            formControlName=\"consultationDisease\"\n                            [ngModel]=\"consultationDisease\"\n                          \n                          name=\"consultationDisease\"\n                          value=\"CROHNS\"\n                          type=\"radio\"\n                          \n                        />\n                        CROHNS\n                      </label>\n                    \n                      <label>\n                        <input\n                          \n                            formControlName=\"consultationDisease\"\n                            [ngModel]=\"consultationDisease\"\n                          \n                          name=\"consultationDisease\"\n                          value=\"DEPRESSION\"\n                          type=\"radio\"\n                          \n                        />\n                        DEPRESSION\n                      </label>\n                    \n                      <label>\n                        <input\n                          \n                            formControlName=\"consultationDisease\"\n                            [ngModel]=\"consultationDisease\"\n                          \n                          name=\"consultationDisease\"\n                          value=\"DIARRHEA\"\n                          type=\"radio\"\n                          \n                        />\n                        DIARRHEA\n                      </label>\n                    \n                      <label>\n                        <input\n                          \n                            formControlName=\"consultationDisease\"\n                            [ngModel]=\"consultationDisease\"\n                          \n                          name=\"consultationDisease\"\n                          value=\"DERMATITIS\"\n                          type=\"radio\"\n                          \n                        />\n                        DERMATITIS\n                      </label>\n                    \n                      <label>\n                        <input\n                          \n                            formControlName=\"consultationDisease\"\n                            [ngModel]=\"consultationDisease\"\n                          \n                          name=\"consultationDisease\"\n                          value=\"ENDOMETRIOSIS\"\n                          type=\"radio\"\n                          \n                        />\n                        ENDOMETRIOSIS\n                      </label>\n                    \n                      <label>\n                        <input\n                          \n                            formControlName=\"consultationDisease\"\n                            [ngModel]=\"consultationDisease\"\n                          \n                          name=\"consultationDisease\"\n                          value=\"EPILEPSY\"\n                          type=\"radio\"\n                          \n                        />\n                        EPILEPSY\n                      </label>\n                    \n                      <label>\n                        <input\n                          \n                            formControlName=\"consultationDisease\"\n                            [ngModel]=\"consultationDisease\"\n                          \n                          name=\"consultationDisease\"\n                          value=\"FIBROMYALGIA\"\n                          type=\"radio\"\n                          \n                        />\n                        FIBROMYALGIA\n                      </label>\n                    \n                      <label>\n                        <input\n                          \n                            formControlName=\"consultationDisease\"\n                            [ngModel]=\"consultationDisease\"\n                          \n                          name=\"consultationDisease\"\n                          value=\"DVT\"\n                          type=\"radio\"\n                          \n                        />\n                        DVT\n                      </label>\n                    \n                      <label>\n                        <input\n                          \n                            formControlName=\"consultationDisease\"\n                            [ngModel]=\"consultationDisease\"\n                          \n                          name=\"consultationDisease\"\n                          value=\"HERPES\"\n                          type=\"radio\"\n                          \n                        />\n                        HERPES\n                      </label>\n                    \n                      <label>\n                        <input\n                          \n                            formControlName=\"consultationDisease\"\n                            [ngModel]=\"consultationDisease\"\n                          \n                          name=\"consultationDisease\"\n                          value=\"GONORRHEA\"\n                          type=\"radio\"\n                          \n                        />\n                        GONORRHEA\n                      </label>\n                    \n                      <label>\n                        <input\n                          \n                            formControlName=\"consultationDisease\"\n                            [ngModel]=\"consultationDisease\"\n                          \n                          name=\"consultationDisease\"\n                          value=\"GOUT\"\n                          type=\"radio\"\n                          \n                        />\n                        GOUT\n                      </label>\n                    \n                      <label>\n                        <input\n                          \n                            formControlName=\"consultationDisease\"\n                            [ngModel]=\"consultationDisease\"\n                          \n                          name=\"consultationDisease\"\n                          value=\"GYNECOMASTIA\"\n                          type=\"radio\"\n                          \n                        />\n                        GYNECOMASTIA\n                      </label>\n                    \n                      <label>\n                        <input\n                          \n                            formControlName=\"consultationDisease\"\n                            [ngModel]=\"consultationDisease\"\n                          \n                          name=\"consultationDisease\"\n                          value=\"MYOCARDIAL_INFARCTION\"\n                          type=\"radio\"\n                          \n                        />\n                        MYOCARDIAL_INFARCTION\n                      </label>\n                    \n                      <label>\n                        <input\n                          \n                            formControlName=\"consultationDisease\"\n                            [ngModel]=\"consultationDisease\"\n                          \n                          name=\"consultationDisease\"\n                          value=\"HEMORRHOIDS\"\n                          type=\"radio\"\n                          \n                        />\n                        HEMORRHOIDS\n                      </label>\n                    \n                      <label>\n                        <input\n                          \n                            formControlName=\"consultationDisease\"\n                            [ngModel]=\"consultationDisease\"\n                          \n                          name=\"consultationDisease\"\n                          value=\"HIV\"\n                          type=\"radio\"\n                          \n                        />\n                        HIV\n                      </label>\n                    \n                      <label>\n                        <input\n                          \n                            formControlName=\"consultationDisease\"\n                            [ngModel]=\"consultationDisease\"\n                          \n                          name=\"consultationDisease\"\n                          value=\"AIDS\"\n                          type=\"radio\"\n                          \n                        />\n                        AIDS\n                      </label>\n                    \n                    </div>\n                  </div>\n                \n              \n\n            </div>\n          \n            <div class=\"form-group text-left\">\n              <label for=\"consultationPrescription\">consultationPrescription</label>\n\n              \n                \n                  <textarea [ngModel]=\"consultationPrescription\" formControlName=\"consultationPrescription\" class=\"form-control\" rows=\"3\"></textarea>\n                \n              \n\n            </div>\n          \n            <div class=\"form-group text-left\">\n              <label for=\"consultationImmunization\">consultationImmunization</label>\n\n              \n                \n                  <textarea [ngModel]=\"consultationImmunization\" formControlName=\"consultationImmunization\" class=\"form-control\" rows=\"3\"></textarea>\n                \n              \n\n            </div>\n          \n\n\n        </div>\n        <div class=\"modal-footer\">\n          <button (click)=\"updateAsset(myForm)\" type=\"submit\" class=\"btn btn-success\" data-dismiss=\"modal\">Submit</button>\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n\n\n<div class=\"modal fade\" id=\"deleteAssetModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"deleteAssetModalLabel\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title\" id=\"deleteAssetModalLabel\">Delete Asset</h4>\n      </div>\n      <form [formGroup]=\"myForm\" (ngSubmit)=\"deleteAsset()\">\n        <div class=\"modal-body\">\n          Are you sure you want to delete this asset?\n        </div>\n        <div class=\"modal-footer\">\n          <button (click)=\"deleteAsset()\" type=\"submit\" class=\"btn btn-danger\" data-dismiss=\"modal\">Yes</button>\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">No</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n\n\n\n\n\n\n\n\n\n\n<div class=\"container\">\n\t<div *ngIf=\"errorMessage\" class=\"alert alert-danger\" role=\"alert\">\n\t\t<strong>Error:</strong> {{errorMessage}}\n\t</div>\n  <h1 id='assetName'>ConsultationInformation</h1>\n  <div class=\"row\">\n    <div class=\"col-md-12 text-right\">\n      <button (click)=\"resetForm()\" type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#addAssetModal\">Add Asset</button>\n    </div>\n  </div>\n  <br>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <table class=\"table table-bordered table-responsive table-striped\">\n        <thead class=\"thead\">\n          <tr class=\"thead-cols\">\n            \n                <th class=\"info\">patientId</th>\n            \n                <th class=\"info\">consultationId</th>\n            \n                <th class=\"info\">consultationType</th>\n            \n                <th class=\"info\">dateOfConsultation</th>\n            \n                <th class=\"info\">consultationDisease</th>\n            \n                <th class=\"info\">consultationPrescription</th>\n            \n                <th class=\"info\">consultationImmunization</th>\n            \n              <th class=\"info\">Actions</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let asset of allAssets\">\n\n            \n                <td>{{asset.patientId}}</td>\n            \n                <td>{{asset.consultationId}}</td>\n            \n                <td>{{asset.consultationType}}</td>\n            \n                <td>{{asset.dateOfConsultation}}</td>\n            \n                <td>{{asset.consultationDisease}}</td>\n            \n                <td>{{asset.consultationPrescription}}</td>\n            \n                <td>{{asset.consultationImmunization}}</td>\n            \n            <td>\n              <button (click)=\"getForm(asset.patientId);\" type=\"button\" class=\"btn btn-success\" data-toggle=\"modal\" data-target=\"#updateAssetModal\">Update Asset</button>\n\n              <button (click)=\"setId(asset.patientId);\" type=\"button\" class=\"btn btn-danger\" data-toggle=\"modal\" data-target=\"#deleteAssetModal\">Delete Asset</button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/ConsultationInformation/ConsultationInformation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsultationInformationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ConsultationInformation_service__ = __webpack_require__("./src/app/ConsultationInformation/ConsultationInformation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConsultationInformationComponent = (function () {
    function ConsultationInformationComponent(serviceConsultationInformation, fb) {
        this.serviceConsultationInformation = serviceConsultationInformation;
        this.patientId = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required);
        this.consultationId = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required);
        this.consultationType = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required);
        this.dateOfConsultation = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required);
        this.consultationDisease = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required);
        this.consultationPrescription = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required);
        this.consultationImmunization = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required);
        this.myForm = fb.group({
            patientId: this.patientId,
            consultationId: this.consultationId,
            consultationType: this.consultationType,
            dateOfConsultation: this.dateOfConsultation,
            consultationDisease: this.consultationDisease,
            consultationPrescription: this.consultationPrescription,
            consultationImmunization: this.consultationImmunization
        });
    }
    ;
    ConsultationInformationComponent.prototype.ngOnInit = function () {
        this.loadAll();
    };
    ConsultationInformationComponent.prototype.loadAll = function () {
        var _this = this;
        var tempList = [];
        return this.serviceConsultationInformation.getAll()
            .toPromise()
            .then(function (result) {
            _this.errorMessage = null;
            result.forEach(function (asset) {
                tempList.push(asset);
            });
            _this.allAssets = tempList;
        })
            .catch(function (error) {
            if (error == 'Server error') {
                _this.errorMessage = "Could not connect to REST server. Please check your configuration details";
            }
            else if (error == '404 - Not Found') {
                _this.errorMessage = "404 - Could not find API route. Please check your available APIs.";
            }
            else {
                _this.errorMessage = error;
            }
        });
    };
    /**
   * Event handler for changing the checked state of a checkbox (handles array enumeration values)
   * @param {String} name - the name of the asset field to update
   * @param {any} value - the enumeration value for which to toggle the checked state
   */
    ConsultationInformationComponent.prototype.changeArrayValue = function (name, value) {
        var index = this[name].value.indexOf(value);
        if (index === -1) {
            this[name].value.push(value);
        }
        else {
            this[name].value.splice(index, 1);
        }
    };
    /**
     * Checkbox helper, determining whether an enumeration value should be selected or not (for array enumeration values
   * only). This is used for checkboxes in the asset updateDialog.
   * @param {String} name - the name of the asset field to check
   * @param {any} value - the enumeration value to check for
   * @return {Boolean} whether the specified asset field contains the provided value
   */
    ConsultationInformationComponent.prototype.hasArrayValue = function (name, value) {
        return this[name].value.indexOf(value) !== -1;
    };
    ConsultationInformationComponent.prototype.addAsset = function (form) {
        var _this = this;
        this.asset = {
            $class: "org.medichain.mvp.ConsultationInformation",
            "patientId": this.patientId.value,
            "consultationId": this.consultationId.value,
            "consultationType": this.consultationType.value,
            "dateOfConsultation": this.dateOfConsultation.value,
            "consultationDisease": this.consultationDisease.value,
            "consultationPrescription": this.consultationPrescription.value,
            "consultationImmunization": this.consultationImmunization.value
        };
        this.myForm.setValue({
            "patientId": null,
            "consultationId": null,
            "consultationType": null,
            "dateOfConsultation": null,
            "consultationDisease": null,
            "consultationPrescription": null,
            "consultationImmunization": null
        });
        return this.serviceConsultationInformation.addAsset(this.asset)
            .toPromise()
            .then(function () {
            _this.errorMessage = null;
            _this.myForm.setValue({
                "patientId": null,
                "consultationId": null,
                "consultationType": null,
                "dateOfConsultation": null,
                "consultationDisease": null,
                "consultationPrescription": null,
                "consultationImmunization": null
            });
        })
            .catch(function (error) {
            if (error == 'Server error') {
                _this.errorMessage = "Could not connect to REST server. Please check your configuration details";
            }
            else {
                _this.errorMessage = error;
            }
        });
    };
    ConsultationInformationComponent.prototype.updateAsset = function (form) {
        var _this = this;
        this.asset = {
            $class: "org.medichain.mvp.ConsultationInformation",
            "consultationId": this.consultationId.value,
            "consultationType": this.consultationType.value,
            "dateOfConsultation": this.dateOfConsultation.value,
            "consultationDisease": this.consultationDisease.value,
            "consultationPrescription": this.consultationPrescription.value,
            "consultationImmunization": this.consultationImmunization.value
        };
        return this.serviceConsultationInformation.updateAsset(form.get("patientId").value, this.asset)
            .toPromise()
            .then(function () {
            _this.errorMessage = null;
        })
            .catch(function (error) {
            if (error == 'Server error') {
                _this.errorMessage = "Could not connect to REST server. Please check your configuration details";
            }
            else if (error == '404 - Not Found') {
                _this.errorMessage = "404 - Could not find API route. Please check your available APIs.";
            }
            else {
                _this.errorMessage = error;
            }
        });
    };
    ConsultationInformationComponent.prototype.deleteAsset = function () {
        var _this = this;
        return this.serviceConsultationInformation.deleteAsset(this.currentId)
            .toPromise()
            .then(function () {
            _this.errorMessage = null;
        })
            .catch(function (error) {
            if (error == 'Server error') {
                _this.errorMessage = "Could not connect to REST server. Please check your configuration details";
            }
            else if (error == '404 - Not Found') {
                _this.errorMessage = "404 - Could not find API route. Please check your available APIs.";
            }
            else {
                _this.errorMessage = error;
            }
        });
    };
    ConsultationInformationComponent.prototype.setId = function (id) {
        this.currentId = id;
    };
    ConsultationInformationComponent.prototype.getForm = function (id) {
        var _this = this;
        return this.serviceConsultationInformation.getAsset(id)
            .toPromise()
            .then(function (result) {
            _this.errorMessage = null;
            var formObject = {
                "patientId": null,
                "consultationId": null,
                "consultationType": null,
                "dateOfConsultation": null,
                "consultationDisease": null,
                "consultationPrescription": null,
                "consultationImmunization": null
            };
            if (result.patientId) {
                formObject.patientId = result.patientId;
            }
            else {
                formObject.patientId = null;
            }
            if (result.consultationId) {
                formObject.consultationId = result.consultationId;
            }
            else {
                formObject.consultationId = null;
            }
            if (result.consultationType) {
                formObject.consultationType = result.consultationType;
            }
            else {
                formObject.consultationType = null;
            }
            if (result.dateOfConsultation) {
                formObject.dateOfConsultation = result.dateOfConsultation;
            }
            else {
                formObject.dateOfConsultation = null;
            }
            if (result.consultationDisease) {
                formObject.consultationDisease = result.consultationDisease;
            }
            else {
                formObject.consultationDisease = null;
            }
            if (result.consultationPrescription) {
                formObject.consultationPrescription = result.consultationPrescription;
            }
            else {
                formObject.consultationPrescription = null;
            }
            if (result.consultationImmunization) {
                formObject.consultationImmunization = result.consultationImmunization;
            }
            else {
                formObject.consultationImmunization = null;
            }
            _this.myForm.setValue(formObject);
        })
            .catch(function (error) {
            if (error == 'Server error') {
                _this.errorMessage = "Could not connect to REST server. Please check your configuration details";
            }
            else if (error == '404 - Not Found') {
                _this.errorMessage = "404 - Could not find API route. Please check your available APIs.";
            }
            else {
                _this.errorMessage = error;
            }
        });
    };
    ConsultationInformationComponent.prototype.resetForm = function () {
        this.myForm.setValue({
            "patientId": null,
            "consultationId": null,
            "consultationType": null,
            "dateOfConsultation": null,
            "consultationDisease": null,
            "consultationPrescription": null,
            "consultationImmunization": null
        });
    };
    ConsultationInformationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-ConsultationInformation',
            template: __webpack_require__("./src/app/ConsultationInformation/ConsultationInformation.component.html"),
            styles: [__webpack_require__("./src/app/ConsultationInformation/ConsultationInformation.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__ConsultationInformation_service__["a" /* ConsultationInformationService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ConsultationInformation_service__["a" /* ConsultationInformationService */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]])
    ], ConsultationInformationComponent);
    return ConsultationInformationComponent;
}());



/***/ }),

/***/ "./src/app/ConsultationInformation/ConsultationInformation.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsultationInformationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Can be injected into a constructor
var ConsultationInformationService = (function () {
    function ConsultationInformationService(dataService) {
        this.dataService = dataService;
        this.NAMESPACE = 'ConsultationInformation';
    }
    ;
    ConsultationInformationService.prototype.getAll = function () {
        return this.dataService.getAll(this.NAMESPACE);
    };
    ConsultationInformationService.prototype.getAsset = function (id) {
        return this.dataService.getSingle(this.NAMESPACE, id);
    };
    ConsultationInformationService.prototype.addAsset = function (itemToAdd) {
        return this.dataService.add(this.NAMESPACE, itemToAdd);
    };
    ConsultationInformationService.prototype.updateAsset = function (id, itemToUpdate) {
        return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    };
    ConsultationInformationService.prototype.deleteAsset = function (id) {
        return this.dataService.delete(this.NAMESPACE, id);
    };
    ConsultationInformationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]])
    ], ConsultationInformationService);
    return ConsultationInformationService;
}());



/***/ }),

/***/ "./src/app/ImmunizationRecord/ImmunizationRecord.component.css":
/***/ (function(module, exports) {

module.exports = "{}\n"

/***/ }),

/***/ "./src/app/ImmunizationRecord/ImmunizationRecord.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" id=\"addAssetModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"addAssetModalLabel\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title\" id=\"addAssetModalLabel\">Add Asset</h4>\n      </div>\n      <form [formGroup]=\"myForm\">\n        <div class=\"modal-body\">\n\n\n          \n\n            \n              <div class=\"form-group text-left\">\n                <label for=\"immunizationId\">immunizationId</label>\n                \n                  <input formControlName=\"immunizationId\" type=\"text\" class=\"form-control\">\n                \n              </div>\n            \n          \n\n            \n              <div class=\"form-group text-left\">\n                <label for=\"subTypeOfImmunization\">subTypeOfImmunization</label>\n                \n                  <input formControlName=\"subTypeOfImmunization\" type=\"text\" class=\"form-control\">\n                \n              </div>\n            \n          \n\n            \n              <div class=\"form-group text-left\">\n                <label for=\"dateOfImmunization\">dateOfImmunization</label>\n                \n                  <input formControlName=\"dateOfImmunization\" type=\"text\" class=\"form-control\">\n                \n              </div>\n            \n          \n\n        </div>\n        <div class=\"modal-footer\">\n          <button (click)=\"addAsset(myForm);\" type=\"submit\" class=\"btn btn-success\" data-dismiss=\"modal\">Submit</button>\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n\n\n\n<div class=\"modal fade\" id=\"updateAssetModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"updateAssetModalLabel\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title\" id=\"updateAssetModalLabel\">Update Asset</h4>\n      </div>\n      <form [formGroup]=\"myForm\">\n        <div class=\"modal-body\">\n\n\n          \n            <div class=\"form-group text-left\">\n              <label for=\"immunizationId\">immunizationId</label>\n\n              \n                <input [ngModel]=\"immunizationId\"formControlName=\"immunizationId\" type=\"text\" class=\"form-control\">\n              \n\n            </div>\n          \n            <div class=\"form-group text-left\">\n              <label for=\"subTypeOfImmunization\">subTypeOfImmunization</label>\n\n              \n                <input [ngModel]=\"subTypeOfImmunization\"formControlName=\"subTypeOfImmunization\" type=\"text\" class=\"form-control\">\n              \n\n            </div>\n          \n            <div class=\"form-group text-left\">\n              <label for=\"dateOfImmunization\">dateOfImmunization</label>\n\n              \n                <input [ngModel]=\"dateOfImmunization\"formControlName=\"dateOfImmunization\" type=\"text\" class=\"form-control\">\n              \n\n            </div>\n          \n\n\n        </div>\n        <div class=\"modal-footer\">\n          <button (click)=\"updateAsset(myForm)\" type=\"submit\" class=\"btn btn-success\" data-dismiss=\"modal\">Submit</button>\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n\n\n<div class=\"modal fade\" id=\"deleteAssetModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"deleteAssetModalLabel\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title\" id=\"deleteAssetModalLabel\">Delete Asset</h4>\n      </div>\n      <form [formGroup]=\"myForm\" (ngSubmit)=\"deleteAsset()\">\n        <div class=\"modal-body\">\n          Are you sure you want to delete this asset?\n        </div>\n        <div class=\"modal-footer\">\n          <button (click)=\"deleteAsset()\" type=\"submit\" class=\"btn btn-danger\" data-dismiss=\"modal\">Yes</button>\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">No</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n\n\n\n\n\n\n\n\n\n\n<div class=\"container\">\n\t<div *ngIf=\"errorMessage\" class=\"alert alert-danger\" role=\"alert\">\n\t\t<strong>Error:</strong> {{errorMessage}}\n\t</div>\n  <h1 id='assetName'>ImmunizationRecord</h1>\n  <div class=\"row\">\n    <div class=\"col-md-12 text-right\">\n      <button (click)=\"resetForm()\" type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#addAssetModal\">Add Asset</button>\n    </div>\n  </div>\n  <br>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <table class=\"table table-bordered table-responsive table-striped\">\n        <thead class=\"thead\">\n          <tr class=\"thead-cols\">\n            \n                <th class=\"info\">immunizationId</th>\n            \n                <th class=\"info\">subTypeOfImmunization</th>\n            \n                <th class=\"info\">dateOfImmunization</th>\n            \n              <th class=\"info\">Actions</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let asset of allAssets\">\n\n            \n                <td>{{asset.immunizationId}}</td>\n            \n                <td>{{asset.subTypeOfImmunization}}</td>\n            \n                <td>{{asset.dateOfImmunization}}</td>\n            \n            <td>\n              <button (click)=\"getForm(asset.immunizationId);\" type=\"button\" class=\"btn btn-success\" data-toggle=\"modal\" data-target=\"#updateAssetModal\">Update Asset</button>\n\n              <button (click)=\"setId(asset.immunizationId);\" type=\"button\" class=\"btn btn-danger\" data-toggle=\"modal\" data-target=\"#deleteAssetModal\">Delete Asset</button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/ImmunizationRecord/ImmunizationRecord.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImmunizationRecordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ImmunizationRecord_service__ = __webpack_require__("./src/app/ImmunizationRecord/ImmunizationRecord.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ImmunizationRecordComponent = (function () {
    function ImmunizationRecordComponent(serviceImmunizationRecord, fb) {
        this.serviceImmunizationRecord = serviceImmunizationRecord;
        this.immunizationId = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required);
        this.subTypeOfImmunization = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required);
        this.dateOfImmunization = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required);
        this.myForm = fb.group({
            immunizationId: this.immunizationId,
            subTypeOfImmunization: this.subTypeOfImmunization,
            dateOfImmunization: this.dateOfImmunization
        });
    }
    ;
    ImmunizationRecordComponent.prototype.ngOnInit = function () {
        this.loadAll();
    };
    ImmunizationRecordComponent.prototype.loadAll = function () {
        var _this = this;
        var tempList = [];
        return this.serviceImmunizationRecord.getAll()
            .toPromise()
            .then(function (result) {
            _this.errorMessage = null;
            result.forEach(function (asset) {
                tempList.push(asset);
            });
            _this.allAssets = tempList;
        })
            .catch(function (error) {
            if (error == 'Server error') {
                _this.errorMessage = "Could not connect to REST server. Please check your configuration details";
            }
            else if (error == '404 - Not Found') {
                _this.errorMessage = "404 - Could not find API route. Please check your available APIs.";
            }
            else {
                _this.errorMessage = error;
            }
        });
    };
    /**
   * Event handler for changing the checked state of a checkbox (handles array enumeration values)
   * @param {String} name - the name of the asset field to update
   * @param {any} value - the enumeration value for which to toggle the checked state
   */
    ImmunizationRecordComponent.prototype.changeArrayValue = function (name, value) {
        var index = this[name].value.indexOf(value);
        if (index === -1) {
            this[name].value.push(value);
        }
        else {
            this[name].value.splice(index, 1);
        }
    };
    /**
     * Checkbox helper, determining whether an enumeration value should be selected or not (for array enumeration values
   * only). This is used for checkboxes in the asset updateDialog.
   * @param {String} name - the name of the asset field to check
   * @param {any} value - the enumeration value to check for
   * @return {Boolean} whether the specified asset field contains the provided value
   */
    ImmunizationRecordComponent.prototype.hasArrayValue = function (name, value) {
        return this[name].value.indexOf(value) !== -1;
    };
    ImmunizationRecordComponent.prototype.addAsset = function (form) {
        var _this = this;
        this.asset = {
            $class: "org.medichain.mvp.ImmunizationRecord",
            "immunizationId": this.immunizationId.value,
            "subTypeOfImmunization": this.subTypeOfImmunization.value,
            "dateOfImmunization": this.dateOfImmunization.value
        };
        this.myForm.setValue({
            "immunizationId": null,
            "subTypeOfImmunization": null,
            "dateOfImmunization": null
        });
        return this.serviceImmunizationRecord.addAsset(this.asset)
            .toPromise()
            .then(function () {
            _this.errorMessage = null;
            _this.myForm.setValue({
                "immunizationId": null,
                "subTypeOfImmunization": null,
                "dateOfImmunization": null
            });
        })
            .catch(function (error) {
            if (error == 'Server error') {
                _this.errorMessage = "Could not connect to REST server. Please check your configuration details";
            }
            else {
                _this.errorMessage = error;
            }
        });
    };
    ImmunizationRecordComponent.prototype.updateAsset = function (form) {
        var _this = this;
        this.asset = {
            $class: "org.medichain.mvp.ImmunizationRecord",
            "subTypeOfImmunization": this.subTypeOfImmunization.value,
            "dateOfImmunization": this.dateOfImmunization.value
        };
        return this.serviceImmunizationRecord.updateAsset(form.get("immunizationId").value, this.asset)
            .toPromise()
            .then(function () {
            _this.errorMessage = null;
        })
            .catch(function (error) {
            if (error == 'Server error') {
                _this.errorMessage = "Could not connect to REST server. Please check your configuration details";
            }
            else if (error == '404 - Not Found') {
                _this.errorMessage = "404 - Could not find API route. Please check your available APIs.";
            }
            else {
                _this.errorMessage = error;
            }
        });
    };
    ImmunizationRecordComponent.prototype.deleteAsset = function () {
        var _this = this;
        return this.serviceImmunizationRecord.deleteAsset(this.currentId)
            .toPromise()
            .then(function () {
            _this.errorMessage = null;
        })
            .catch(function (error) {
            if (error == 'Server error') {
                _this.errorMessage = "Could not connect to REST server. Please check your configuration details";
            }
            else if (error == '404 - Not Found') {
                _this.errorMessage = "404 - Could not find API route. Please check your available APIs.";
            }
            else {
                _this.errorMessage = error;
            }
        });
    };
    ImmunizationRecordComponent.prototype.setId = function (id) {
        this.currentId = id;
    };
    ImmunizationRecordComponent.prototype.getForm = function (id) {
        var _this = this;
        return this.serviceImmunizationRecord.getAsset(id)
            .toPromise()
            .then(function (result) {
            _this.errorMessage = null;
            var formObject = {
                "immunizationId": null,
                "subTypeOfImmunization": null,
                "dateOfImmunization": null
            };
            if (result.immunizationId) {
                formObject.immunizationId = result.immunizationId;
            }
            else {
                formObject.immunizationId = null;
            }
            if (result.subTypeOfImmunization) {
                formObject.subTypeOfImmunization = result.subTypeOfImmunization;
            }
            else {
                formObject.subTypeOfImmunization = null;
            }
            if (result.dateOfImmunization) {
                formObject.dateOfImmunization = result.dateOfImmunization;
            }
            else {
                formObject.dateOfImmunization = null;
            }
            _this.myForm.setValue(formObject);
        })
            .catch(function (error) {
            if (error == 'Server error') {
                _this.errorMessage = "Could not connect to REST server. Please check your configuration details";
            }
            else if (error == '404 - Not Found') {
                _this.errorMessage = "404 - Could not find API route. Please check your available APIs.";
            }
            else {
                _this.errorMessage = error;
            }
        });
    };
    ImmunizationRecordComponent.prototype.resetForm = function () {
        this.myForm.setValue({
            "immunizationId": null,
            "subTypeOfImmunization": null,
            "dateOfImmunization": null
        });
    };
    ImmunizationRecordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-ImmunizationRecord',
            template: __webpack_require__("./src/app/ImmunizationRecord/ImmunizationRecord.component.html"),
            styles: [__webpack_require__("./src/app/ImmunizationRecord/ImmunizationRecord.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__ImmunizationRecord_service__["a" /* ImmunizationRecordService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ImmunizationRecord_service__["a" /* ImmunizationRecordService */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]])
    ], ImmunizationRecordComponent);
    return ImmunizationRecordComponent;
}());



/***/ }),

/***/ "./src/app/ImmunizationRecord/ImmunizationRecord.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImmunizationRecordService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Can be injected into a constructor
var ImmunizationRecordService = (function () {
    function ImmunizationRecordService(dataService) {
        this.dataService = dataService;
        this.NAMESPACE = 'ImmunizationRecord';
    }
    ;
    ImmunizationRecordService.prototype.getAll = function () {
        return this.dataService.getAll(this.NAMESPACE);
    };
    ImmunizationRecordService.prototype.getAsset = function (id) {
        return this.dataService.getSingle(this.NAMESPACE, id);
    };
    ImmunizationRecordService.prototype.addAsset = function (itemToAdd) {
        return this.dataService.add(this.NAMESPACE, itemToAdd);
    };
    ImmunizationRecordService.prototype.updateAsset = function (id, itemToUpdate) {
        return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    };
    ImmunizationRecordService.prototype.deleteAsset = function (id) {
        return this.dataService.delete(this.NAMESPACE, id);
    };
    ImmunizationRecordService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]])
    ], ImmunizationRecordService);
    return ImmunizationRecordService;
}());



/***/ }),

/***/ "./src/app/InsuranceData/InsuranceData.component.css":
/***/ (function(module, exports) {

module.exports = "{}\n"

/***/ }),

/***/ "./src/app/InsuranceData/InsuranceData.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" id=\"addAssetModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"addAssetModalLabel\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title\" id=\"addAssetModalLabel\">Add Asset</h4>\n      </div>\n      <form [formGroup]=\"myForm\">\n        <div class=\"modal-body\">\n\n\n          \n\n            \n              <div class=\"form-group text-left\">\n                <label for=\"patientId\">patientId</label>\n                \n                  <input formControlName=\"patientId\" type=\"text\" class=\"form-control\">\n                \n              </div>\n            \n          \n\n            \n              <div class=\"form-group text-left\">\n                <label for=\"typeOfInsurance\">typeOfInsurance</label>\n                \n                  <input formControlName=\"typeOfInsurance\" type=\"text\" class=\"form-control\">\n                \n              </div>\n            \n          \n\n            \n              <div class=\"form-group text-left\">\n                <label for=\"provider\">provider</label>\n                \n                  <input formControlName=\"provider\" type=\"text\" class=\"form-control\">\n                \n              </div>\n            \n          \n\n            \n              <div class=\"form-group text-left\">\n                <label for=\"plan_name\">plan_name</label>\n                \n                  <input formControlName=\"plan_name\" type=\"text\" class=\"form-control\">\n                \n              </div>\n            \n          \n\n            \n              <div class=\"form-group text-left\">\n                <label for=\"policy_number\">policy_number</label>\n                \n                  <input formControlName=\"policy_number\" type=\"text\" class=\"form-control\">\n                \n              </div>\n            \n          \n\n            \n              <div class=\"form-group text-left\">\n                <label for=\"group_number\">group_number</label>\n                \n                  <input formControlName=\"group_number\" type=\"number\" class=\"form-control\">\n                \n              </div>\n            \n          \n\n            \n              <div class=\"form-group text-left\">\n                <label for=\"subscriber_lname\">subscriber_lname</label>\n                \n                  <input formControlName=\"subscriber_lname\" type=\"text\" class=\"form-control\">\n                \n              </div>\n            \n          \n\n            \n              <div class=\"form-group text-left\">\n                <label for=\"subscriber_mname\">subscriber_mname</label>\n                \n                  <input formControlName=\"subscriber_mname\" type=\"text\" class=\"form-control\">\n                \n              </div>\n            \n          \n\n            \n              <div class=\"form-group text-left\">\n                <label for=\"subscriber_fname\">subscriber_fname</label>\n                \n                  <input formControlName=\"subscriber_fname\" type=\"text\" class=\"form-control\">\n                \n              </div>\n            \n          \n\n            \n              <div class=\"form-group text-left\">\n                <label for=\"subscriber_relationship\">subscriber_relationship</label>\n                \n                  <input formControlName=\"subscriber_relationship\" type=\"text\" class=\"form-control\">\n                \n              </div>\n            \n          \n\n            \n              <div class=\"form-group text-left\">\n                <label for=\"subscriber_ss\">subscriber_ss</label>\n                \n                  <input formControlName=\"subscriber_ss\" type=\"text\" class=\"form-control\">\n                \n              </div>\n            \n          \n\n            \n              <div class=\"form-group text-left\">\n                <label for=\"subscriber_DOB\">subscriber_DOB</label>\n                \n                  <input formControlName=\"subscriber_DOB\" type=\"text\" class=\"form-control\">\n                \n              </div>\n            \n          \n\n            \n              <div class=\"form-group text-left\">\n                <label for=\"subscriber_street\">subscriber_street</label>\n                \n                  <input formControlName=\"subscriber_street\" type=\"text\" class=\"form-control\">\n                \n              </div>\n            \n          \n\n            \n              <div class=\"form-group text-left\">\n                <label for=\"subscriber_postal_code\">subscriber_postal_code</label>\n                \n                  <input formControlName=\"subscriber_postal_code\" type=\"text\" class=\"form-control\">\n                \n              </div>\n            \n          \n\n            \n              <div class=\"form-group text-left\">\n                <label for=\"subscriber_city\">subscriber_city</label>\n                \n                  <input formControlName=\"subscriber_city\" type=\"text\" class=\"form-control\">\n                \n              </div>\n            \n          \n\n            \n              <div class=\"form-group text-left\">\n                <label for=\"subscriber_state\">subscriber_state</label>\n                \n                  <input formControlName=\"subscriber_state\" type=\"text\" class=\"form-control\">\n                \n              </div>\n            \n          \n\n            \n              <div class=\"form-group text-left\">\n                <label for=\"subscriber_country\">subscriber_country</label>\n                \n                  <input formControlName=\"subscriber_country\" type=\"text\" class=\"form-control\">\n                \n              </div>\n            \n          \n\n            \n              <div class=\"form-group text-left\">\n                <label for=\"subscriber_phone\">subscriber_phone</label>\n                \n                  <input formControlName=\"subscriber_phone\" type=\"text\" class=\"form-control\">\n                \n              </div>\n            \n          \n\n            \n              <div class=\"form-group text-left\">\n                <label for=\"subscriber_employer\">subscriber_employer</label>\n                \n                  <input formControlName=\"subscriber_employer\" type=\"text\" class=\"form-control\">\n                \n              </div>\n            \n          \n\n            \n              <div class=\"form-group text-left\">\n                <label for=\"subscriber_employer_street\">subscriber_employer_street</label>\n                \n                  <input formControlName=\"subscriber_employer_street\" type=\"text\" class=\"form-control\">\n                \n              </div>\n            \n          \n\n            \n              <div class=\"form-group text-left\">\n                <label for=\"subscriber_employer_postal_code\">subscriber_employer_postal_code</label>\n                \n                  <input formControlName=\"subscriber_employer_postal_code\" type=\"text\" class=\"form-control\">\n                \n              </div>\n            \n          \n\n            \n              <div class=\"form-group text-left\">\n                <label for=\"subscriber_employer_state\">subscriber_employer_state</label>\n                \n                  <input formControlName=\"subscriber_employer_state\" type=\"text\" class=\"form-control\">\n                \n              </div>\n            \n          \n\n            \n              <div class=\"form-group text-left\">\n                <label for=\"subscriber_employer_country\">subscriber_employer_country</label>\n                \n                  <input formControlName=\"subscriber_employer_country\" type=\"text\" class=\"form-control\">\n                \n              </div>\n            \n          \n\n            \n              <div class=\"form-group text-left\">\n                <label for=\"subscriber_employer_city\">subscriber_employer_city</label>\n                \n                  <input formControlName=\"subscriber_employer_city\" type=\"text\" class=\"form-control\">\n                \n              </div>\n            \n          \n\n            \n              <div class=\"form-group text-left\">\n                <label for=\"copay\">copay</label>\n                \n                  <input formControlName=\"copay\" type=\"text\" class=\"form-control\">\n                \n              </div>\n            \n          \n\n            \n              <div class=\"form-group text-left\">\n                <label for=\"date\">date</label>\n                \n                  <input formControlName=\"date\" type=\"text\" class=\"form-control\">\n                \n              </div>\n            \n          \n\n            \n              <div class=\"form-group text-left\">\n                <label for=\"subscriber_sex\">subscriber_sex</label>\n                \n                  <input formControlName=\"subscriber_sex\" type=\"text\" class=\"form-control\">\n                \n              </div>\n            \n          \n\n            \n              <div class=\"form-group text-left\">\n                <label for=\"accept_assignment\">accept_assignment</label>\n                \n                  <input formControlName=\"accept_assignment\" type=\"text\" class=\"form-control\">\n                \n              </div>\n            \n          \n\n        </div>\n        <div class=\"modal-footer\">\n          <button (click)=\"addAsset(myForm);\" type=\"submit\" class=\"btn btn-success\" data-dismiss=\"modal\">Submit</button>\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n\n\n\n<div class=\"modal fade\" id=\"updateAssetModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"updateAssetModalLabel\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title\" id=\"updateAssetModalLabel\">Update Asset</h4>\n      </div>\n      <form [formGroup]=\"myForm\">\n        <div class=\"modal-body\">\n\n\n          \n            <div class=\"form-group text-left\">\n              <label for=\"patientId\">patientId</label>\n\n              \n                <input [ngModel]=\"patientId\"formControlName=\"patientId\" type=\"text\" class=\"form-control\">\n              \n\n            </div>\n          \n            <div class=\"form-group text-left\">\n              <label for=\"typeOfInsurance\">typeOfInsurance</label>\n\n              \n                <input [ngModel]=\"typeOfInsurance\"formControlName=\"typeOfInsurance\" type=\"text\" class=\"form-control\">\n              \n\n            </div>\n          \n            <div class=\"form-group text-left\">\n              <label for=\"provider\">provider</label>\n\n              \n                <input [ngModel]=\"provider\"formControlName=\"provider\" type=\"text\" class=\"form-control\">\n              \n\n            </div>\n          \n            <div class=\"form-group text-left\">\n              <label for=\"plan_name\">plan_name</label>\n\n              \n                <input [ngModel]=\"plan_name\"formControlName=\"plan_name\" type=\"text\" class=\"form-control\">\n              \n\n            </div>\n          \n            <div class=\"form-group text-left\">\n              <label for=\"policy_number\">policy_number</label>\n\n              \n                <input [ngModel]=\"policy_number\"formControlName=\"policy_number\" type=\"text\" class=\"form-control\">\n              \n\n            </div>\n          \n            <div class=\"form-group text-left\">\n              <label for=\"group_number\">group_number</label>\n\n              \n                <input [ngModel]=\"group_number\" formControlName=\"group_number\" type=\"number\" class=\"form-control\">\n              \n\n            </div>\n          \n            <div class=\"form-group text-left\">\n              <label for=\"subscriber_lname\">subscriber_lname</label>\n\n              \n                <input [ngModel]=\"subscriber_lname\"formControlName=\"subscriber_lname\" type=\"text\" class=\"form-control\">\n              \n\n            </div>\n          \n            <div class=\"form-group text-left\">\n              <label for=\"subscriber_mname\">subscriber_mname</label>\n\n              \n                <input [ngModel]=\"subscriber_mname\"formControlName=\"subscriber_mname\" type=\"text\" class=\"form-control\">\n              \n\n            </div>\n          \n            <div class=\"form-group text-left\">\n              <label for=\"subscriber_fname\">subscriber_fname</label>\n\n              \n                <input [ngModel]=\"subscriber_fname\"formControlName=\"subscriber_fname\" type=\"text\" class=\"form-control\">\n              \n\n            </div>\n          \n            <div class=\"form-group text-left\">\n              <label for=\"subscriber_relationship\">subscriber_relationship</label>\n\n              \n                <input [ngModel]=\"subscriber_relationship\"formControlName=\"subscriber_relationship\" type=\"text\" class=\"form-control\">\n              \n\n            </div>\n          \n            <div class=\"form-group text-left\">\n              <label for=\"subscriber_ss\">subscriber_ss</label>\n\n              \n                <input [ngModel]=\"subscriber_ss\"formControlName=\"subscriber_ss\" type=\"text\" class=\"form-control\">\n              \n\n            </div>\n          \n            <div class=\"form-group text-left\">\n              <label for=\"subscriber_DOB\">subscriber_DOB</label>\n\n              \n                <input [ngModel]=\"subscriber_DOB\"formControlName=\"subscriber_DOB\" type=\"text\" class=\"form-control\">\n              \n\n            </div>\n          \n            <div class=\"form-group text-left\">\n              <label for=\"subscriber_street\">subscriber_street</label>\n\n              \n                <input [ngModel]=\"subscriber_street\"formControlName=\"subscriber_street\" type=\"text\" class=\"form-control\">\n              \n\n            </div>\n          \n            <div class=\"form-group text-left\">\n              <label for=\"subscriber_postal_code\">subscriber_postal_code</label>\n\n              \n                <input [ngModel]=\"subscriber_postal_code\"formControlName=\"subscriber_postal_code\" type=\"text\" class=\"form-control\">\n              \n\n            </div>\n          \n            <div class=\"form-group text-left\">\n              <label for=\"subscriber_city\">subscriber_city</label>\n\n              \n                <input [ngModel]=\"subscriber_city\"formControlName=\"subscriber_city\" type=\"text\" class=\"form-control\">\n              \n\n            </div>\n          \n            <div class=\"form-group text-left\">\n              <label for=\"subscriber_state\">subscriber_state</label>\n\n              \n                <input [ngModel]=\"subscriber_state\"formControlName=\"subscriber_state\" type=\"text\" class=\"form-control\">\n              \n\n            </div>\n          \n            <div class=\"form-group text-left\">\n              <label for=\"subscriber_country\">subscriber_country</label>\n\n              \n                <input [ngModel]=\"subscriber_country\"formControlName=\"subscriber_country\" type=\"text\" class=\"form-control\">\n              \n\n            </div>\n          \n            <div class=\"form-group text-left\">\n              <label for=\"subscriber_phone\">subscriber_phone</label>\n\n              \n                <input [ngModel]=\"subscriber_phone\"formControlName=\"subscriber_phone\" type=\"text\" class=\"form-control\">\n              \n\n            </div>\n          \n            <div class=\"form-group text-left\">\n              <label for=\"subscriber_employer\">subscriber_employer</label>\n\n              \n                <input [ngModel]=\"subscriber_employer\"formControlName=\"subscriber_employer\" type=\"text\" class=\"form-control\">\n              \n\n            </div>\n          \n            <div class=\"form-group text-left\">\n              <label for=\"subscriber_employer_street\">subscriber_employer_street</label>\n\n              \n                <input [ngModel]=\"subscriber_employer_street\"formControlName=\"subscriber_employer_street\" type=\"text\" class=\"form-control\">\n              \n\n            </div>\n          \n            <div class=\"form-group text-left\">\n              <label for=\"subscriber_employer_postal_code\">subscriber_employer_postal_code</label>\n\n              \n                <input [ngModel]=\"subscriber_employer_postal_code\"formControlName=\"subscriber_employer_postal_code\" type=\"text\" class=\"form-control\">\n              \n\n            </div>\n          \n            <div class=\"form-group text-left\">\n              <label for=\"subscriber_employer_state\">subscriber_employer_state</label>\n\n              \n                <input [ngModel]=\"subscriber_employer_state\"formControlName=\"subscriber_employer_state\" type=\"text\" class=\"form-control\">\n              \n\n            </div>\n          \n            <div class=\"form-group text-left\">\n              <label for=\"subscriber_employer_country\">subscriber_employer_country</label>\n\n              \n                <input [ngModel]=\"subscriber_employer_country\"formControlName=\"subscriber_employer_country\" type=\"text\" class=\"form-control\">\n              \n\n            </div>\n          \n            <div class=\"form-group text-left\">\n              <label for=\"subscriber_employer_city\">subscriber_employer_city</label>\n\n              \n                <input [ngModel]=\"subscriber_employer_city\"formControlName=\"subscriber_employer_city\" type=\"text\" class=\"form-control\">\n              \n\n            </div>\n          \n            <div class=\"form-group text-left\">\n              <label for=\"copay\">copay</label>\n\n              \n                <input [ngModel]=\"copay\"formControlName=\"copay\" type=\"text\" class=\"form-control\">\n              \n\n            </div>\n          \n            <div class=\"form-group text-left\">\n              <label for=\"date\">date</label>\n\n              \n                <input [ngModel]=\"date\"formControlName=\"date\" type=\"text\" class=\"form-control\">\n              \n\n            </div>\n          \n            <div class=\"form-group text-left\">\n              <label for=\"subscriber_sex\">subscriber_sex</label>\n\n              \n                <input [ngModel]=\"subscriber_sex\"formControlName=\"subscriber_sex\" type=\"text\" class=\"form-control\">\n              \n\n            </div>\n          \n            <div class=\"form-group text-left\">\n              <label for=\"accept_assignment\">accept_assignment</label>\n\n              \n                <input [ngModel]=\"accept_assignment\"formControlName=\"accept_assignment\" type=\"text\" class=\"form-control\">\n              \n\n            </div>\n          \n\n\n        </div>\n        <div class=\"modal-footer\">\n          <button (click)=\"updateAsset(myForm)\" type=\"submit\" class=\"btn btn-success\" data-dismiss=\"modal\">Submit</button>\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n\n\n<div class=\"modal fade\" id=\"deleteAssetModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"deleteAssetModalLabel\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title\" id=\"deleteAssetModalLabel\">Delete Asset</h4>\n      </div>\n      <form [formGroup]=\"myForm\" (ngSubmit)=\"deleteAsset()\">\n        <div class=\"modal-body\">\n          Are you sure you want to delete this asset?\n        </div>\n        <div class=\"modal-footer\">\n          <button (click)=\"deleteAsset()\" type=\"submit\" class=\"btn btn-danger\" data-dismiss=\"modal\">Yes</button>\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">No</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n\n\n\n\n\n\n\n\n\n\n<div class=\"container\">\n\t<div *ngIf=\"errorMessage\" class=\"alert alert-danger\" role=\"alert\">\n\t\t<strong>Error:</strong> {{errorMessage}}\n\t</div>\n  <h1 id='assetName'>InsuranceData</h1>\n  <div class=\"row\">\n    <div class=\"col-md-12 text-right\">\n      <button (click)=\"resetForm()\" type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#addAssetModal\">Add Asset</button>\n    </div>\n  </div>\n  <br>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <table class=\"table table-bordered table-responsive table-striped\">\n        <thead class=\"thead\">\n          <tr class=\"thead-cols\">\n            \n                <th class=\"info\">patientId</th>\n            \n                <th class=\"info\">typeOfInsurance</th>\n            \n                <th class=\"info\">provider</th>\n            \n                <th class=\"info\">plan_name</th>\n            \n                <th class=\"info\">policy_number</th>\n            \n                <th class=\"info\">group_number</th>\n            \n                <th class=\"info\">subscriber_lname</th>\n            \n                <th class=\"info\">subscriber_mname</th>\n            \n                <th class=\"info\">subscriber_fname</th>\n            \n                <th class=\"info\">subscriber_relationship</th>\n            \n                <th class=\"info\">subscriber_ss</th>\n            \n                <th class=\"info\">subscriber_DOB</th>\n            \n                <th class=\"info\">subscriber_street</th>\n            \n                <th class=\"info\">subscriber_postal_code</th>\n            \n                <th class=\"info\">subscriber_city</th>\n            \n                <th class=\"info\">subscriber_state</th>\n            \n                <th class=\"info\">subscriber_country</th>\n            \n                <th class=\"info\">subscriber_phone</th>\n            \n                <th class=\"info\">subscriber_employer</th>\n            \n                <th class=\"info\">subscriber_employer_street</th>\n            \n                <th class=\"info\">subscriber_employer_postal_code</th>\n            \n                <th class=\"info\">subscriber_employer_state</th>\n            \n                <th class=\"info\">subscriber_employer_country</th>\n            \n                <th class=\"info\">subscriber_employer_city</th>\n            \n                <th class=\"info\">copay</th>\n            \n                <th class=\"info\">date</th>\n            \n                <th class=\"info\">subscriber_sex</th>\n            \n                <th class=\"info\">accept_assignment</th>\n            \n              <th class=\"info\">Actions</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let asset of allAssets\">\n\n            \n                <td>{{asset.patientId}}</td>\n            \n                <td>{{asset.typeOfInsurance}}</td>\n            \n                <td>{{asset.provider}}</td>\n            \n                <td>{{asset.plan_name}}</td>\n            \n                <td>{{asset.policy_number}}</td>\n            \n                <td>{{asset.group_number}}</td>\n            \n                <td>{{asset.subscriber_lname}}</td>\n            \n                <td>{{asset.subscriber_mname}}</td>\n            \n                <td>{{asset.subscriber_fname}}</td>\n            \n                <td>{{asset.subscriber_relationship}}</td>\n            \n                <td>{{asset.subscriber_ss}}</td>\n            \n                <td>{{asset.subscriber_DOB}}</td>\n            \n                <td>{{asset.subscriber_street}}</td>\n            \n                <td>{{asset.subscriber_postal_code}}</td>\n            \n                <td>{{asset.subscriber_city}}</td>\n            \n                <td>{{asset.subscriber_state}}</td>\n            \n                <td>{{asset.subscriber_country}}</td>\n            \n                <td>{{asset.subscriber_phone}}</td>\n            \n                <td>{{asset.subscriber_employer}}</td>\n            \n                <td>{{asset.subscriber_employer_street}}</td>\n            \n                <td>{{asset.subscriber_employer_postal_code}}</td>\n            \n                <td>{{asset.subscriber_employer_state}}</td>\n            \n                <td>{{asset.subscriber_employer_country}}</td>\n            \n                <td>{{asset.subscriber_employer_city}}</td>\n            \n                <td>{{asset.copay}}</td>\n            \n                <td>{{asset.date}}</td>\n            \n                <td>{{asset.subscriber_sex}}</td>\n            \n                <td>{{asset.accept_assignment}}</td>\n            \n            <td>\n              <button (click)=\"getForm(asset.patientId);\" type=\"button\" class=\"btn btn-success\" data-toggle=\"modal\" data-target=\"#updateAssetModal\">Update Asset</button>\n\n              <button (click)=\"setId(asset.patientId);\" type=\"button\" class=\"btn btn-danger\" data-toggle=\"modal\" data-target=\"#deleteAssetModal\">Delete Asset</button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/InsuranceData/InsuranceData.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InsuranceDataComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__InsuranceData_service__ = __webpack_require__("./src/app/InsuranceData/InsuranceData.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InsuranceDataComponent = (function () {
    function InsuranceDataComponent(serviceInsuranceData, fb) {
        this.serviceInsuranceData = serviceInsuranceData;
        this.patientId = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required);
        this.typeOfInsurance = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required);
        this.provider = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required);
        this.plan_name = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required);
        this.policy_number = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required);
        this.group_number = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required);
        this.subscriber_lname = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required);
        this.subscriber_mname = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required);
        this.subscriber_fname = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required);
        this.subscriber_relationship = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required);
        this.subscriber_ss = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required);
        this.subscriber_DOB = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required);
        this.subscriber_street = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required);
        this.subscriber_postal_code = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required);
        this.subscriber_city = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required);
        this.subscriber_state = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required);
        this.subscriber_country = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required);
        this.subscriber_phone = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required);
        this.subscriber_employer = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required);
        this.subscriber_employer_street = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required);
        this.subscriber_employer_postal_code = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required);
        this.subscriber_employer_state = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required);
        this.subscriber_employer_country = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required);
        this.subscriber_employer_city = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required);
        this.copay = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required);
        this.date = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required);
        this.subscriber_sex = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required);
        this.accept_assignment = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required);
        this.myForm = fb.group({
            patientId: this.patientId,
            typeOfInsurance: this.typeOfInsurance,
            provider: this.provider,
            plan_name: this.plan_name,
            policy_number: this.policy_number,
            group_number: this.group_number,
            subscriber_lname: this.subscriber_lname,
            subscriber_mname: this.subscriber_mname,
            subscriber_fname: this.subscriber_fname,
            subscriber_relationship: this.subscriber_relationship,
            subscriber_ss: this.subscriber_ss,
            subscriber_DOB: this.subscriber_DOB,
            subscriber_street: this.subscriber_street,
            subscriber_postal_code: this.subscriber_postal_code,
            subscriber_city: this.subscriber_city,
            subscriber_state: this.subscriber_state,
            subscriber_country: this.subscriber_country,
            subscriber_phone: this.subscriber_phone,
            subscriber_employer: this.subscriber_employer,
            subscriber_employer_street: this.subscriber_employer_street,
            subscriber_employer_postal_code: this.subscriber_employer_postal_code,
            subscriber_employer_state: this.subscriber_employer_state,
            subscriber_employer_country: this.subscriber_employer_country,
            subscriber_employer_city: this.subscriber_employer_city,
            copay: this.copay,
            date: this.date,
            subscriber_sex: this.subscriber_sex,
            accept_assignment: this.accept_assignment
        });
    }
    ;
    InsuranceDataComponent.prototype.ngOnInit = function () {
        this.loadAll();
    };
    InsuranceDataComponent.prototype.loadAll = function () {
        var _this = this;
        var tempList = [];
        return this.serviceInsuranceData.getAll()
            .toPromise()
            .then(function (result) {
            _this.errorMessage = null;
            result.forEach(function (asset) {
                tempList.push(asset);
            });
            _this.allAssets = tempList;
        })
            .catch(function (error) {
            if (error == 'Server error') {
                _this.errorMessage = "Could not connect to REST server. Please check your configuration details";
            }
            else if (error == '404 - Not Found') {
                _this.errorMessage = "404 - Could not find API route. Please check your available APIs.";
            }
            else {
                _this.errorMessage = error;
            }
        });
    };
    /**
   * Event handler for changing the checked state of a checkbox (handles array enumeration values)
   * @param {String} name - the name of the asset field to update
   * @param {any} value - the enumeration value for which to toggle the checked state
   */
    InsuranceDataComponent.prototype.changeArrayValue = function (name, value) {
        var index = this[name].value.indexOf(value);
        if (index === -1) {
            this[name].value.push(value);
        }
        else {
            this[name].value.splice(index, 1);
        }
    };
    /**
     * Checkbox helper, determining whether an enumeration value should be selected or not (for array enumeration values
   * only). This is used for checkboxes in the asset updateDialog.
   * @param {String} name - the name of the asset field to check
   * @param {any} value - the enumeration value to check for
   * @return {Boolean} whether the specified asset field contains the provided value
   */
    InsuranceDataComponent.prototype.hasArrayValue = function (name, value) {
        return this[name].value.indexOf(value) !== -1;
    };
    InsuranceDataComponent.prototype.addAsset = function (form) {
        var _this = this;
        this.asset = {
            $class: "org.medichain.mvp.InsuranceData",
            "patientId": this.patientId.value,
            "typeOfInsurance": this.typeOfInsurance.value,
            "provider": this.provider.value,
            "plan_name": this.plan_name.value,
            "policy_number": this.policy_number.value,
            "group_number": this.group_number.value,
            "subscriber_lname": this.subscriber_lname.value,
            "subscriber_mname": this.subscriber_mname.value,
            "subscriber_fname": this.subscriber_fname.value,
            "subscriber_relationship": this.subscriber_relationship.value,
            "subscriber_ss": this.subscriber_ss.value,
            "subscriber_DOB": this.subscriber_DOB.value,
            "subscriber_street": this.subscriber_street.value,
            "subscriber_postal_code": this.subscriber_postal_code.value,
            "subscriber_city": this.subscriber_city.value,
            "subscriber_state": this.subscriber_state.value,
            "subscriber_country": this.subscriber_country.value,
            "subscriber_phone": this.subscriber_phone.value,
            "subscriber_employer": this.subscriber_employer.value,
            "subscriber_employer_street": this.subscriber_employer_street.value,
            "subscriber_employer_postal_code": this.subscriber_employer_postal_code.value,
            "subscriber_employer_state": this.subscriber_employer_state.value,
            "subscriber_employer_country": this.subscriber_employer_country.value,
            "subscriber_employer_city": this.subscriber_employer_city.value,
            "copay": this.copay.value,
            "date": this.date.value,
            "subscriber_sex": this.subscriber_sex.value,
            "accept_assignment": this.accept_assignment.value
        };
        this.myForm.setValue({
            "patientId": null,
            "typeOfInsurance": null,
            "provider": null,
            "plan_name": null,
            "policy_number": null,
            "group_number": null,
            "subscriber_lname": null,
            "subscriber_mname": null,
            "subscriber_fname": null,
            "subscriber_relationship": null,
            "subscriber_ss": null,
            "subscriber_DOB": null,
            "subscriber_street": null,
            "subscriber_postal_code": null,
            "subscriber_city": null,
            "subscriber_state": null,
            "subscriber_country": null,
            "subscriber_phone": null,
            "subscriber_employer": null,
            "subscriber_employer_street": null,
            "subscriber_employer_postal_code": null,
            "subscriber_employer_state": null,
            "subscriber_employer_country": null,
            "subscriber_employer_city": null,
            "copay": null,
            "date": null,
            "subscriber_sex": null,
            "accept_assignment": null
        });
        return this.serviceInsuranceData.addAsset(this.asset)
            .toPromise()
            .then(function () {
            _this.errorMessage = null;
            _this.myForm.setValue({
                "patientId": null,
                "typeOfInsurance": null,
                "provider": null,
                "plan_name": null,
                "policy_number": null,
                "group_number": null,
                "subscriber_lname": null,
                "subscriber_mname": null,
                "subscriber_fname": null,
                "subscriber_relationship": null,
                "subscriber_ss": null,
                "subscriber_DOB": null,
                "subscriber_street": null,
                "subscriber_postal_code": null,
                "subscriber_city": null,
                "subscriber_state": null,
                "subscriber_country": null,
                "subscriber_phone": null,
                "subscriber_employer": null,
                "subscriber_employer_street": null,
                "subscriber_employer_postal_code": null,
                "subscriber_employer_state": null,
                "subscriber_employer_country": null,
                "subscriber_employer_city": null,
                "copay": null,
                "date": null,
                "subscriber_sex": null,
                "accept_assignment": null
            });
        })
            .catch(function (error) {
            if (error == 'Server error') {
                _this.errorMessage = "Could not connect to REST server. Please check your configuration details";
            }
            else {
                _this.errorMessage = error;
            }
        });
    };
    InsuranceDataComponent.prototype.updateAsset = function (form) {
        var _this = this;
        this.asset = {
            $class: "org.medichain.mvp.InsuranceData",
            "typeOfInsurance": this.typeOfInsurance.value,
            "provider": this.provider.value,
            "plan_name": this.plan_name.value,
            "policy_number": this.policy_number.value,
            "group_number": this.group_number.value,
            "subscriber_lname": this.subscriber_lname.value,
            "subscriber_mname": this.subscriber_mname.value,
            "subscriber_fname": this.subscriber_fname.value,
            "subscriber_relationship": this.subscriber_relationship.value,
            "subscriber_ss": this.subscriber_ss.value,
            "subscriber_DOB": this.subscriber_DOB.value,
            "subscriber_street": this.subscriber_street.value,
            "subscriber_postal_code": this.subscriber_postal_code.value,
            "subscriber_city": this.subscriber_city.value,
            "subscriber_state": this.subscriber_state.value,
            "subscriber_country": this.subscriber_country.value,
            "subscriber_phone": this.subscriber_phone.value,
            "subscriber_employer": this.subscriber_employer.value,
            "subscriber_employer_street": this.subscriber_employer_street.value,
            "subscriber_employer_postal_code": this.subscriber_employer_postal_code.value,
            "subscriber_employer_state": this.subscriber_employer_state.value,
            "subscriber_employer_country": this.subscriber_employer_country.value,
            "subscriber_employer_city": this.subscriber_employer_city.value,
            "copay": this.copay.value,
            "date": this.date.value,
            "subscriber_sex": this.subscriber_sex.value,
            "accept_assignment": this.accept_assignment.value
        };
        return this.serviceInsuranceData.updateAsset(form.get("patientId").value, this.asset)
            .toPromise()
            .then(function () {
            _this.errorMessage = null;
        })
            .catch(function (error) {
            if (error == 'Server error') {
                _this.errorMessage = "Could not connect to REST server. Please check your configuration details";
            }
            else if (error == '404 - Not Found') {
                _this.errorMessage = "404 - Could not find API route. Please check your available APIs.";
            }
            else {
                _this.errorMessage = error;
            }
        });
    };
    InsuranceDataComponent.prototype.deleteAsset = function () {
        var _this = this;
        return this.serviceInsuranceData.deleteAsset(this.currentId)
            .toPromise()
            .then(function () {
            _this.errorMessage = null;
        })
            .catch(function (error) {
            if (error == 'Server error') {
                _this.errorMessage = "Could not connect to REST server. Please check your configuration details";
            }
            else if (error == '404 - Not Found') {
                _this.errorMessage = "404 - Could not find API route. Please check your available APIs.";
            }
            else {
                _this.errorMessage = error;
            }
        });
    };
    InsuranceDataComponent.prototype.setId = function (id) {
        this.currentId = id;
    };
    InsuranceDataComponent.prototype.getForm = function (id) {
        var _this = this;
        return this.serviceInsuranceData.getAsset(id)
            .toPromise()
            .then(function (result) {
            _this.errorMessage = null;
            var formObject = {
                "patientId": null,
                "typeOfInsurance": null,
                "provider": null,
                "plan_name": null,
                "policy_number": null,
                "group_number": null,
                "subscriber_lname": null,
                "subscriber_mname": null,
                "subscriber_fname": null,
                "subscriber_relationship": null,
                "subscriber_ss": null,
                "subscriber_DOB": null,
                "subscriber_street": null,
                "subscriber_postal_code": null,
                "subscriber_city": null,
                "subscriber_state": null,
                "subscriber_country": null,
                "subscriber_phone": null,
                "subscriber_employer": null,
                "subscriber_employer_street": null,
                "subscriber_employer_postal_code": null,
                "subscriber_employer_state": null,
                "subscriber_employer_country": null,
                "subscriber_employer_city": null,
                "copay": null,
                "date": null,
                "subscriber_sex": null,
                "accept_assignment": null
            };
            if (result.patientId) {
                formObject.patientId = result.patientId;
            }
            else {
                formObject.patientId = null;
            }
            if (result.typeOfInsurance) {
                formObject.typeOfInsurance = result.typeOfInsurance;
            }
            else {
                formObject.typeOfInsurance = null;
            }
            if (result.provider) {
                formObject.provider = result.provider;
            }
            else {
                formObject.provider = null;
            }
            if (result.plan_name) {
                formObject.plan_name = result.plan_name;
            }
            else {
                formObject.plan_name = null;
            }
            if (result.policy_number) {
                formObject.policy_number = result.policy_number;
            }
            else {
                formObject.policy_number = null;
            }
            if (result.group_number) {
                formObject.group_number = result.group_number;
            }
            else {
                formObject.group_number = null;
            }
            if (result.subscriber_lname) {
                formObject.subscriber_lname = result.subscriber_lname;
            }
            else {
                formObject.subscriber_lname = null;
            }
            if (result.subscriber_mname) {
                formObject.subscriber_mname = result.subscriber_mname;
            }
            else {
                formObject.subscriber_mname = null;
            }
            if (result.subscriber_fname) {
                formObject.subscriber_fname = result.subscriber_fname;
            }
            else {
                formObject.subscriber_fname = null;
            }
            if (result.subscriber_relationship) {
                formObject.subscriber_relationship = result.subscriber_relationship;
            }
            else {
                formObject.subscriber_relationship = null;
            }
            if (result.subscriber_ss) {
                formObject.subscriber_ss = result.subscriber_ss;
            }
            else {
                formObject.subscriber_ss = null;
            }
            if (result.subscriber_DOB) {
                formObject.subscriber_DOB = result.subscriber_DOB;
            }
            else {
                formObject.subscriber_DOB = null;
            }
            if (result.subscriber_street) {
                formObject.subscriber_street = result.subscriber_street;
            }
            else {
                formObject.subscriber_street = null;
            }
            if (result.subscriber_postal_code) {
                formObject.subscriber_postal_code = result.subscriber_postal_code;
            }
            else {
                formObject.subscriber_postal_code = null;
            }
            if (result.subscriber_city) {
                formObject.subscriber_city = result.subscriber_city;
            }
            else {
                formObject.subscriber_city = null;
            }
            if (result.subscriber_state) {
                formObject.subscriber_state = result.subscriber_state;
            }
            else {
                formObject.subscriber_state = null;
            }
            if (result.subscriber_country) {
                formObject.subscriber_country = result.subscriber_country;
            }
            else {
                formObject.subscriber_country = null;
            }
            if (result.subscriber_phone) {
                formObject.subscriber_phone = result.subscriber_phone;
            }
            else {
                formObject.subscriber_phone = null;
            }
            if (result.subscriber_employer) {
                formObject.subscriber_employer = result.subscriber_employer;
            }
            else {
                formObject.subscriber_employer = null;
            }
            if (result.subscriber_employer_street) {
                formObject.subscriber_employer_street = result.subscriber_employer_street;
            }
            else {
                formObject.subscriber_employer_street = null;
            }
            if (result.subscriber_employer_postal_code) {
                formObject.subscriber_employer_postal_code = result.subscriber_employer_postal_code;
            }
            else {
                formObject.subscriber_employer_postal_code = null;
            }
            if (result.subscriber_employer_state) {
                formObject.subscriber_employer_state = result.subscriber_employer_state;
            }
            else {
                formObject.subscriber_employer_state = null;
            }
            if (result.subscriber_employer_country) {
                formObject.subscriber_employer_country = result.subscriber_employer_country;
            }
            else {
                formObject.subscriber_employer_country = null;
            }
            if (result.subscriber_employer_city) {
                formObject.subscriber_employer_city = result.subscriber_employer_city;
            }
            else {
                formObject.subscriber_employer_city = null;
            }
            if (result.copay) {
                formObject.copay = result.copay;
            }
            else {
                formObject.copay = null;
            }
            if (result.date) {
                formObject.date = result.date;
            }
            else {
                formObject.date = null;
            }
            if (result.subscriber_sex) {
                formObject.subscriber_sex = result.subscriber_sex;
            }
            else {
                formObject.subscriber_sex = null;
            }
            if (result.accept_assignment) {
                formObject.accept_assignment = result.accept_assignment;
            }
            else {
                formObject.accept_assignment = null;
            }
            _this.myForm.setValue(formObject);
        })
            .catch(function (error) {
            if (error == 'Server error') {
                _this.errorMessage = "Could not connect to REST server. Please check your configuration details";
            }
            else if (error == '404 - Not Found') {
                _this.errorMessage = "404 - Could not find API route. Please check your available APIs.";
            }
            else {
                _this.errorMessage = error;
            }
        });
    };
    InsuranceDataComponent.prototype.resetForm = function () {
        this.myForm.setValue({
            "patientId": null,
            "typeOfInsurance": null,
            "provider": null,
            "plan_name": null,
            "policy_number": null,
            "group_number": null,
            "subscriber_lname": null,
            "subscriber_mname": null,
            "subscriber_fname": null,
            "subscriber_relationship": null,
            "subscriber_ss": null,
            "subscriber_DOB": null,
            "subscriber_street": null,
            "subscriber_postal_code": null,
            "subscriber_city": null,
            "subscriber_state": null,
            "subscriber_country": null,
            "subscriber_phone": null,
            "subscriber_employer": null,
            "subscriber_employer_street": null,
            "subscriber_employer_postal_code": null,
            "subscriber_employer_state": null,
            "subscriber_employer_country": null,
            "subscriber_employer_city": null,
            "copay": null,
            "date": null,
            "subscriber_sex": null,
            "accept_assignment": null
        });
    };
    InsuranceDataComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-InsuranceData',
            template: __webpack_require__("./src/app/InsuranceData/InsuranceData.component.html"),
            styles: [__webpack_require__("./src/app/InsuranceData/InsuranceData.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__InsuranceData_service__["a" /* InsuranceDataService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__InsuranceData_service__["a" /* InsuranceDataService */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]])
    ], InsuranceDataComponent);
    return InsuranceDataComponent;
}());



/***/ }),

/***/ "./src/app/InsuranceData/InsuranceData.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InsuranceDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Can be injected into a constructor
var InsuranceDataService = (function () {
    function InsuranceDataService(dataService) {
        this.dataService = dataService;
        this.NAMESPACE = 'InsuranceData';
    }
    ;
    InsuranceDataService.prototype.getAll = function () {
        return this.dataService.getAll(this.NAMESPACE);
    };
    InsuranceDataService.prototype.getAsset = function (id) {
        return this.dataService.getSingle(this.NAMESPACE, id);
    };
    InsuranceDataService.prototype.addAsset = function (itemToAdd) {
        return this.dataService.add(this.NAMESPACE, itemToAdd);
    };
    InsuranceDataService.prototype.updateAsset = function (id, itemToUpdate) {
        return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    };
    InsuranceDataService.prototype.deleteAsset = function (id) {
        return this.dataService.delete(this.NAMESPACE, id);
    };
    InsuranceDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]])
    ], InsuranceDataService);
    return InsuranceDataService;
}());



/***/ }),

/***/ "./src/app/PatientMasterData/PatientMasterData.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/PatientMasterData/PatientMasterData.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" id=\"addAssetModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"addAssetModalLabel\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title\" id=\"addAssetModalLabel\">Add Asset</h4>\n      </div>\n      <form [formGroup]=\"myForm\">\n        <div class=\"modal-body\">\n\n\n          \n\n            \n              <div class=\"form-group text-left\">\n                <label for=\"masterDataId\">masterDataId</label>\n                \n                  <input formControlName=\"masterDataId\" type=\"text\" class=\"form-control\">\n                \n              </div>\n            \n          \n\n            \n              <div class=\"form-group text-left\">\n                <label for=\"patientPrescriptions\">patientPrescriptions</label>\n                \n                    <textarea formControlName=\"patientPrescriptions\" class=\"form-control\" rows=\"3\"></textarea>\n                \n              </div>\n            \n          \n\n            \n              <div class=\"form-group text-left\">\n                <label for=\"patientImmunizationHistory\">patientImmunizationHistory</label>\n                \n                    <textarea formControlName=\"patientImmunizationHistory\" class=\"form-control\" rows=\"3\"></textarea>\n                \n              </div>\n            \n          \n\n            \n              <div class=\"form-group text-left\">\n                <label for=\"patientConsultationHistory\">patientConsultationHistory</label>\n                \n                    <textarea formControlName=\"patientConsultationHistory\" class=\"form-control\" rows=\"3\"></textarea>\n                \n              </div>\n            \n          \n\n            \n              <div class=\"form-group text-left\">\n                <label for=\"patientInsuranceInfo\">patientInsuranceInfo</label>\n                \n                    <textarea formControlName=\"patientInsuranceInfo\" class=\"form-control\" rows=\"3\"></textarea>\n                \n              </div>\n            \n          \n\n        </div>\n        <div class=\"modal-footer\">\n          <button (click)=\"addAsset(myForm);\" type=\"submit\" class=\"btn btn-success\" data-dismiss=\"modal\">Submit</button>\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n\n\n\n<div class=\"modal fade\" id=\"updateAssetModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"updateAssetModalLabel\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title\" id=\"updateAssetModalLabel\">Update Asset</h4>\n      </div>\n      <form [formGroup]=\"myForm\">\n        <div class=\"modal-body\">\n\n\n          \n            <div class=\"form-group text-left\">\n              <label for=\"masterDataId\">masterDataId</label>\n\n              \n                <input [ngModel]=\"masterDataId\"formControlName=\"masterDataId\" type=\"text\" class=\"form-control\">\n              \n\n            </div>\n          \n            <div class=\"form-group text-left\">\n              <label for=\"patientPrescriptions\">patientPrescriptions</label>\n\n              \n                \n                  <textarea [ngModel]=\"patientPrescriptions\" formControlName=\"patientPrescriptions\" class=\"form-control\" rows=\"3\"></textarea>\n                \n              \n\n            </div>\n          \n            <div class=\"form-group text-left\">\n              <label for=\"patientImmunizationHistory\">patientImmunizationHistory</label>\n\n              \n                \n                  <textarea [ngModel]=\"patientImmunizationHistory\" formControlName=\"patientImmunizationHistory\" class=\"form-control\" rows=\"3\"></textarea>\n                \n              \n\n            </div>\n          \n            <div class=\"form-group text-left\">\n              <label for=\"patientConsultationHistory\">patientConsultationHistory</label>\n\n              \n                \n                  <textarea [ngModel]=\"patientConsultationHistory\" formControlName=\"patientConsultationHistory\" class=\"form-control\" rows=\"3\"></textarea>\n                \n              \n\n            </div>\n          \n            <div class=\"form-group text-left\">\n              <label for=\"patientInsuranceInfo\">patientInsuranceInfo</label>\n\n              \n                \n                  <textarea [ngModel]=\"patientInsuranceInfo\" formControlName=\"patientInsuranceInfo\" class=\"form-control\" rows=\"3\"></textarea>\n                \n              \n\n            </div>\n          \n\n\n        </div>\n        <div class=\"modal-footer\">\n          <button (click)=\"updateAsset(myForm)\" type=\"submit\" class=\"btn btn-success\" data-dismiss=\"modal\">Submit</button>\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n\n\n<div class=\"modal fade\" id=\"deleteAssetModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"deleteAssetModalLabel\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title\" id=\"deleteAssetModalLabel\">Delete Asset</h4>\n      </div>\n      <form [formGroup]=\"myForm\" (ngSubmit)=\"deleteAsset()\">\n        <div class=\"modal-body\">\n          Are you sure you want to delete this asset?\n        </div>\n        <div class=\"modal-footer\">\n          <button (click)=\"deleteAsset()\" type=\"submit\" class=\"btn btn-danger\" data-dismiss=\"modal\">Yes</button>\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">No</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n\n\n\n\n\n\n\n\n\n\n<div class=\"container\">\n\t<div *ngIf=\"errorMessage\" class=\"alert alert-danger\" role=\"alert\">\n\t\t<strong>Error:</strong> {{errorMessage}}\n\t</div>\n  <h1 id='assetName'>Patient Master Data</h1>\n  <div class=\"row\">\n    <div class=\"col-md-12 text-right\">\n      <button (click)=\"resetForm()\" type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#addAssetModal\">Add Asset</button>\n    </div>\n  </div>\n  <br>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <table class=\"table table-bordered table-responsive table-striped\">\n        <thead class=\"thead\">\n          <tr class=\"thead-cols\">\n            \n                <th class=\"info\">masterDataId</th>\n            \n                <th class=\"info\">patientPrescriptions</th>\n            \n                <th class=\"info\">patientImmunizationHistory</th>\n            \n                <th class=\"info\">patientConsultationHistory</th>\n            \n                <th class=\"info\">patientInsuranceInfo</th>\n            \n              <th class=\"info\">Actions</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let asset of allAssets\">\n\n            \n                <td>{{asset.masterDataId}}</td>\n            \n                <td>{{asset.patientPrescriptions}}</td>\n            \n                <td>{{asset.patientImmunizationHistory}}</td>\n            \n                <td>{{asset.patientConsultationHistory}}</td>\n            \n                <td>{{asset.patientInsuranceInfo}}</td>\n            \n            <td>\n              <button (click)=\"getForm(asset.masterDataId);\" type=\"button\" class=\"btn btn-success\" data-toggle=\"modal\" data-target=\"#updateAssetModal\">Update Asset</button>\n\n              <button (click)=\"setId(asset.masterDataId);\" type=\"button\" class=\"btn btn-danger\" data-toggle=\"modal\" data-target=\"#deleteAssetModal\">Delete Asset</button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/PatientMasterData/PatientMasterData.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientMasterDataComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__PatientMasterData_service__ = __webpack_require__("./src/app/PatientMasterData/PatientMasterData.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PatientMasterDataComponent = (function () {
    function PatientMasterDataComponent(servicePatientMasterData, fb) {
        this.servicePatientMasterData = servicePatientMasterData;
        this.masterDataId = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required);
        this.patientPrescriptions = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required);
        this.patientImmunizationHistory = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required);
        this.patientConsultationHistory = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required);
        this.patientInsuranceInfo = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required);
        this.myForm = fb.group({
            masterDataId: this.masterDataId,
            patientPrescriptions: this.patientPrescriptions,
            patientImmunizationHistory: this.patientImmunizationHistory,
            patientConsultationHistory: this.patientConsultationHistory,
            patientInsuranceInfo: this.patientInsuranceInfo
        });
    }
    ;
    PatientMasterDataComponent.prototype.ngOnInit = function () {
        this.loadAll();
    };
    PatientMasterDataComponent.prototype.loadAll = function () {
        var _this = this;
        var tempList = [];
        return this.servicePatientMasterData.getAll()
            .toPromise()
            .then(function (result) {
            _this.errorMessage = null;
            result.forEach(function (asset) {
                tempList.push(asset);
            });
            _this.allAssets = tempList;
        })
            .catch(function (error) {
            if (error == 'Server error') {
                _this.errorMessage = "Could not connect to REST server. Please check your configuration details";
            }
            else if (error == '404 - Not Found') {
                _this.errorMessage = "404 - Could not find API route. Please check your available APIs.";
            }
            else {
                _this.errorMessage = error;
            }
        });
    };
    /**
   * Event handler for changing the checked state of a checkbox (handles array enumeration values)
   * @param {String} name - the name of the asset field to update
   * @param {any} value - the enumeration value for which to toggle the checked state
   */
    PatientMasterDataComponent.prototype.changeArrayValue = function (name, value) {
        var index = this[name].value.indexOf(value);
        if (index === -1) {
            this[name].value.push(value);
        }
        else {
            this[name].value.splice(index, 1);
        }
    };
    /**
     * Checkbox helper, determining whether an enumeration value should be selected or not (for array enumeration values
   * only). This is used for checkboxes in the asset updateDialog.
   * @param {String} name - the name of the asset field to check
   * @param {any} value - the enumeration value to check for
   * @return {Boolean} whether the specified asset field contains the provided value
   */
    PatientMasterDataComponent.prototype.hasArrayValue = function (name, value) {
        return this[name].value.indexOf(value) !== -1;
    };
    PatientMasterDataComponent.prototype.addAsset = function (form) {
        var _this = this;
        this.asset = {
            $class: "org.medichain.mvp.PatientMasterData",
            "masterDataId": this.masterDataId.value,
            "patientPrescriptions": this.patientPrescriptions.value,
            "patientImmunizationHistory": this.patientImmunizationHistory.value,
            "patientConsultationHistory": this.patientConsultationHistory.value,
            "patientInsuranceInfo": this.patientInsuranceInfo.value
        };
        this.myForm.setValue({
            "masterDataId": null,
            "patientPrescriptions": null,
            "patientImmunizationHistory": null,
            "patientConsultationHistory": null,
            "patientInsuranceInfo": null
        });
        return this.servicePatientMasterData.addAsset(this.asset)
            .toPromise()
            .then(function () {
            _this.errorMessage = null;
            _this.myForm.setValue({
                "masterDataId": null,
                "patientPrescriptions": null,
                "patientImmunizationHistory": null,
                "patientConsultationHistory": null,
                "patientInsuranceInfo": null
            });
        })
            .catch(function (error) {
            if (error == 'Server error') {
                _this.errorMessage = "Could not connect to REST server. Please check your configuration details";
            }
            else {
                _this.errorMessage = error;
            }
        });
    };
    PatientMasterDataComponent.prototype.updateAsset = function (form) {
        var _this = this;
        this.asset = {
            $class: "org.medichain.mvp.PatientMasterData",
            "patientPrescriptions": this.patientPrescriptions.value,
            "patientImmunizationHistory": this.patientImmunizationHistory.value,
            "patientConsultationHistory": this.patientConsultationHistory.value,
            "patientInsuranceInfo": this.patientInsuranceInfo.value
        };
        return this.servicePatientMasterData.updateAsset(form.get("masterDataId").value, this.asset)
            .toPromise()
            .then(function () {
            _this.errorMessage = null;
        })
            .catch(function (error) {
            if (error == 'Server error') {
                _this.errorMessage = "Could not connect to REST server. Please check your configuration details";
            }
            else if (error == '404 - Not Found') {
                _this.errorMessage = "404 - Could not find API route. Please check your available APIs.";
            }
            else {
                _this.errorMessage = error;
            }
        });
    };
    PatientMasterDataComponent.prototype.deleteAsset = function () {
        var _this = this;
        return this.servicePatientMasterData.deleteAsset(this.currentId)
            .toPromise()
            .then(function () {
            _this.errorMessage = null;
        })
            .catch(function (error) {
            if (error == 'Server error') {
                _this.errorMessage = "Could not connect to REST server. Please check your configuration details";
            }
            else if (error == '404 - Not Found') {
                _this.errorMessage = "404 - Could not find API route. Please check your available APIs.";
            }
            else {
                _this.errorMessage = error;
            }
        });
    };
    PatientMasterDataComponent.prototype.setId = function (id) {
        this.currentId = id;
    };
    PatientMasterDataComponent.prototype.getForm = function (id) {
        var _this = this;
        return this.servicePatientMasterData.getAsset(id)
            .toPromise()
            .then(function (result) {
            _this.errorMessage = null;
            var formObject = {
                "masterDataId": null,
                "patientPrescriptions": null,
                "patientImmunizationHistory": null,
                "patientConsultationHistory": null,
                "patientInsuranceInfo": null
            };
            if (result.masterDataId) {
                formObject.masterDataId = result.masterDataId;
            }
            else {
                formObject.masterDataId = null;
            }
            if (result.patientPrescriptions) {
                formObject.patientPrescriptions = result.patientPrescriptions;
            }
            else {
                formObject.patientPrescriptions = null;
            }
            if (result.patientImmunizationHistory) {
                formObject.patientImmunizationHistory = result.patientImmunizationHistory;
            }
            else {
                formObject.patientImmunizationHistory = null;
            }
            if (result.patientConsultationHistory) {
                formObject.patientConsultationHistory = result.patientConsultationHistory;
            }
            else {
                formObject.patientConsultationHistory = null;
            }
            if (result.patientInsuranceInfo) {
                formObject.patientInsuranceInfo = result.patientInsuranceInfo;
            }
            else {
                formObject.patientInsuranceInfo = null;
            }
            _this.myForm.setValue(formObject);
        })
            .catch(function (error) {
            if (error == 'Server error') {
                _this.errorMessage = "Could not connect to REST server. Please check your configuration details";
            }
            else if (error == '404 - Not Found') {
                _this.errorMessage = "404 - Could not find API route. Please check your available APIs.";
            }
            else {
                _this.errorMessage = error;
            }
        });
    };
    PatientMasterDataComponent.prototype.resetForm = function () {
        this.myForm.setValue({
            "masterDataId": null,
            "patientPrescriptions": null,
            "patientImmunizationHistory": null,
            "patientConsultationHistory": null,
            "patientInsuranceInfo": null
        });
    };
    PatientMasterDataComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-PatientMasterData',
            template: __webpack_require__("./src/app/PatientMasterData/PatientMasterData.component.html"),
            styles: [__webpack_require__("./src/app/PatientMasterData/PatientMasterData.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__PatientMasterData_service__["a" /* PatientMasterDataService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__PatientMasterData_service__["a" /* PatientMasterDataService */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]])
    ], PatientMasterDataComponent);
    return PatientMasterDataComponent;
}());



/***/ }),

/***/ "./src/app/PatientMasterData/PatientMasterData.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientMasterDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Can be injected into a constructor
var PatientMasterDataService = (function () {
    function PatientMasterDataService(dataService) {
        this.dataService = dataService;
        this.NAMESPACE = 'PatientMasterData';
    }
    ;
    PatientMasterDataService.prototype.getAll = function () {
        return this.dataService.getAll(this.NAMESPACE);
    };
    PatientMasterDataService.prototype.getAsset = function (id) {
        return this.dataService.getSingle(this.NAMESPACE, id);
    };
    PatientMasterDataService.prototype.addAsset = function (itemToAdd) {
        return this.dataService.add(this.NAMESPACE, itemToAdd);
    };
    PatientMasterDataService.prototype.updateAsset = function (id, itemToUpdate) {
        return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    };
    PatientMasterDataService.prototype.deleteAsset = function (id) {
        return this.dataService.delete(this.NAMESPACE, id);
    };
    PatientMasterDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]])
    ], PatientMasterDataService);
    return PatientMasterDataService;
}());



/***/ }),

/***/ "./src/app/Prescription/Prescription.component.css":
/***/ (function(module, exports) {

module.exports = "{}\n"

/***/ }),

/***/ "./src/app/Prescription/Prescription.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" id=\"addAssetModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"addAssetModalLabel\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title\" id=\"addAssetModalLabel\">Add Asset</h4>\n      </div>\n      <form [formGroup]=\"myForm\">\n        <div class=\"modal-body\">\n\n\n          \n\n            \n              <div class=\"form-group text-left\">\n                <label for=\"prescriptionId\">prescriptionId</label>\n                \n                  <input formControlName=\"prescriptionId\" type=\"text\" class=\"form-control\">\n                \n              </div>\n            \n          \n\n            \n              <div class=\"form-group text-left\">\n                <label for=\"patientId\">patientId</label>\n                \n                  <input formControlName=\"patientId\" type=\"text\" class=\"form-control\">\n                \n              </div>\n            \n          \n\n            \n              <div class=\"form-group text-left\">\n                <label for=\"pharmacyId\">pharmacyId</label>\n                \n                  <input formControlName=\"pharmacyId\" type=\"number\" class=\"form-control\">\n                \n              </div>\n            \n          \n\n            \n              <div class=\"form-group text-left\">\n                <label for=\"dateAdded\">dateAdded</label>\n                \n                  <input formControlName=\"dateAdded\" type=\"text\" class=\"form-control\">\n                \n              </div>\n            \n          \n\n            \n              <div class=\"form-group text-left\">\n                <label for=\"dateModified\">dateModified</label>\n                \n                  <input formControlName=\"dateModified\" type=\"text\" class=\"form-control\">\n                \n              </div>\n            \n          \n\n            \n              <div class=\"form-group text-left\">\n                <label for=\"providerId\">providerId</label>\n                \n                  <input formControlName=\"providerId\" type=\"number\" class=\"form-control\">\n                \n              </div>\n            \n          \n\n            \n              <div class=\"form-group text-left\">\n                <label for=\"startDate\">startDate</label>\n                \n                  <input formControlName=\"startDate\" type=\"text\" class=\"form-control\">\n                \n              </div>\n            \n          \n\n            \n              <div class=\"form-group text-left\">\n                <label for=\"drug\">drug</label>\n                \n                  <input formControlName=\"drug\" type=\"text\" class=\"form-control\">\n                \n              </div>\n            \n          \n\n            \n              <div class=\"form-group text-left\">\n                <label for=\"dosage\">dosage</label>\n                \n                  <input formControlName=\"dosage\" type=\"text\" class=\"form-control\">\n                \n              </div>\n            \n          \n\n            \n              <div class=\"form-group text-left\">\n                <label for=\"quantity\">quantity</label>\n                \n                  <input formControlName=\"quantity\" type=\"text\" class=\"form-control\">\n                \n              </div>\n            \n          \n\n            \n              <div class=\"form-group text-left\">\n                <label for=\"size\">size</label>\n                \n                  <input formControlName=\"size\" type=\"number\" step='any' class=\"form-control\">\n                \n              </div>\n            \n          \n\n            \n              <div class=\"form-group text-left\">\n                <label for=\"unit\">unit</label>\n                \n                  <input formControlName=\"unit\" type=\"number\" class=\"form-control\">\n                \n              </div>\n            \n          \n\n            \n              <div class=\"form-group text-left\">\n                <label for=\"perRefil\">perRefil</label>\n                \n                  <input formControlName=\"perRefil\" type=\"text\" class=\"form-control\">\n                \n              </div>\n            \n          \n\n            \n              <div class=\"form-group text-left\">\n                <label for=\"filledDate\">filledDate</label>\n                \n                  <input formControlName=\"filledDate\" type=\"text\" class=\"form-control\">\n                \n              </div>\n            \n          \n\n            \n              <div class=\"form-group text-left\">\n                <label for=\"medication\">medication</label>\n                \n                  <input formControlName=\"medication\" type=\"text\" class=\"form-control\">\n                \n              </div>\n            \n          \n\n            \n              <div class=\"form-group text-left\">\n                <label for=\"note\">note</label>\n                \n                  <input formControlName=\"note\" type=\"text\" class=\"form-control\">\n                \n              </div>\n            \n          \n\n            \n              <div class=\"form-group text-left\">\n                <label for=\"active\">active</label>\n                \n                  <input formControlName=\"active\" type=\"checkbox\" class=\"form-control\">\n                \n              </div>\n            \n          \n\n        </div>\n        <div class=\"modal-footer\">\n          <button (click)=\"addAsset(myForm);\" type=\"submit\" class=\"btn btn-success\" data-dismiss=\"modal\">Submit</button>\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n\n\n\n<div class=\"modal fade\" id=\"updateAssetModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"updateAssetModalLabel\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title\" id=\"updateAssetModalLabel\">Update Asset</h4>\n      </div>\n      <form [formGroup]=\"myForm\">\n        <div class=\"modal-body\">\n\n\n          \n            <div class=\"form-group text-left\">\n              <label for=\"prescriptionId\">prescriptionId</label>\n\n              \n                <input [ngModel]=\"prescriptionId\"formControlName=\"prescriptionId\" type=\"text\" class=\"form-control\">\n              \n\n            </div>\n          \n            <div class=\"form-group text-left\">\n              <label for=\"patientId\">patientId</label>\n\n              \n                <input [ngModel]=\"patientId\"formControlName=\"patientId\" type=\"text\" class=\"form-control\">\n              \n\n            </div>\n          \n            <div class=\"form-group text-left\">\n              <label for=\"pharmacyId\">pharmacyId</label>\n\n              \n                <input [ngModel]=\"pharmacyId\" formControlName=\"pharmacyId\" type=\"number\" class=\"form-control\">\n              \n\n            </div>\n          \n            <div class=\"form-group text-left\">\n              <label for=\"dateAdded\">dateAdded</label>\n\n              \n                <input [ngModel]=\"dateAdded\"formControlName=\"dateAdded\" type=\"text\" class=\"form-control\">\n              \n\n            </div>\n          \n            <div class=\"form-group text-left\">\n              <label for=\"dateModified\">dateModified</label>\n\n              \n                <input [ngModel]=\"dateModified\"formControlName=\"dateModified\" type=\"text\" class=\"form-control\">\n              \n\n            </div>\n          \n            <div class=\"form-group text-left\">\n              <label for=\"providerId\">providerId</label>\n\n              \n                <input [ngModel]=\"providerId\" formControlName=\"providerId\" type=\"number\" class=\"form-control\">\n              \n\n            </div>\n          \n            <div class=\"form-group text-left\">\n              <label for=\"startDate\">startDate</label>\n\n              \n                <input [ngModel]=\"startDate\"formControlName=\"startDate\" type=\"text\" class=\"form-control\">\n              \n\n            </div>\n          \n            <div class=\"form-group text-left\">\n              <label for=\"drug\">drug</label>\n\n              \n                <input [ngModel]=\"drug\"formControlName=\"drug\" type=\"text\" class=\"form-control\">\n              \n\n            </div>\n          \n            <div class=\"form-group text-left\">\n              <label for=\"dosage\">dosage</label>\n\n              \n                <input [ngModel]=\"dosage\"formControlName=\"dosage\" type=\"text\" class=\"form-control\">\n              \n\n            </div>\n          \n            <div class=\"form-group text-left\">\n              <label for=\"quantity\">quantity</label>\n\n              \n                <input [ngModel]=\"quantity\"formControlName=\"quantity\" type=\"text\" class=\"form-control\">\n              \n\n            </div>\n          \n            <div class=\"form-group text-left\">\n              <label for=\"size\">size</label>\n\n              \n                <input [ngModel]=\"size\" formControlName=\"size\" type=\"number\" step='any' class=\"form-control\">\n              \n\n            </div>\n          \n            <div class=\"form-group text-left\">\n              <label for=\"unit\">unit</label>\n\n              \n                <input [ngModel]=\"unit\" formControlName=\"unit\" type=\"number\" class=\"form-control\">\n              \n\n            </div>\n          \n            <div class=\"form-group text-left\">\n              <label for=\"perRefil\">perRefil</label>\n\n              \n                <input [ngModel]=\"perRefil\"formControlName=\"perRefil\" type=\"text\" class=\"form-control\">\n              \n\n            </div>\n          \n            <div class=\"form-group text-left\">\n              <label for=\"filledDate\">filledDate</label>\n\n              \n                <input [ngModel]=\"filledDate\"formControlName=\"filledDate\" type=\"text\" class=\"form-control\">\n              \n\n            </div>\n          \n            <div class=\"form-group text-left\">\n              <label for=\"medication\">medication</label>\n\n              \n                <input [ngModel]=\"medication\"formControlName=\"medication\" type=\"text\" class=\"form-control\">\n              \n\n            </div>\n          \n            <div class=\"form-group text-left\">\n              <label for=\"note\">note</label>\n\n              \n                <input [ngModel]=\"note\"formControlName=\"note\" type=\"text\" class=\"form-control\">\n              \n\n            </div>\n          \n            <div class=\"form-group text-left\">\n              <label for=\"active\">active</label>\n\n              \n                <input [ngModel]=\"active\" formControlName=\"active\" type=\"checkbox\" class=\"form-control\">\n              \n\n            </div>\n          \n\n\n        </div>\n        <div class=\"modal-footer\">\n          <button (click)=\"updateAsset(myForm)\" type=\"submit\" class=\"btn btn-success\" data-dismiss=\"modal\">Submit</button>\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n\n\n<div class=\"modal fade\" id=\"deleteAssetModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"deleteAssetModalLabel\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title\" id=\"deleteAssetModalLabel\">Delete Asset</h4>\n      </div>\n      <form [formGroup]=\"myForm\" (ngSubmit)=\"deleteAsset()\">\n        <div class=\"modal-body\">\n          Are you sure you want to delete this asset?\n        </div>\n        <div class=\"modal-footer\">\n          <button (click)=\"deleteAsset()\" type=\"submit\" class=\"btn btn-danger\" data-dismiss=\"modal\">Yes</button>\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">No</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n\n\n\n\n\n\n\n\n\n\n<div class=\"container\">\n\t<div *ngIf=\"errorMessage\" class=\"alert alert-danger\" role=\"alert\">\n\t\t<strong>Error:</strong> {{errorMessage}}\n\t</div>\n  <h1 id='assetName'>Prescription</h1>\n  <div class=\"row\">\n    <div class=\"col-md-12 text-right\">\n      <button (click)=\"resetForm()\" type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#addAssetModal\">Add Asset</button>\n    </div>\n  </div>\n  <br>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <table class=\"table table-bordered table-responsive table-striped\">\n        <thead class=\"thead\">\n          <tr class=\"thead-cols\">\n            \n                <th class=\"info\">prescriptionId</th>\n            \n                <th class=\"info\">patientId</th>\n            \n                <th class=\"info\">pharmacyId</th>\n            \n                <th class=\"info\">dateAdded</th>\n            \n                <th class=\"info\">dateModified</th>\n            \n                <th class=\"info\">providerId</th>\n            \n                <th class=\"info\">startDate</th>\n            \n                <th class=\"info\">drug</th>\n            \n                <th class=\"info\">dosage</th>\n            \n                <th class=\"info\">quantity</th>\n            \n                <th class=\"info\">size</th>\n            \n                <th class=\"info\">unit</th>\n            \n                <th class=\"info\">perRefil</th>\n            \n                <th class=\"info\">filledDate</th>\n            \n                <th class=\"info\">medication</th>\n            \n                <th class=\"info\">note</th>\n            \n                <th class=\"info\">active</th>\n            \n              <th class=\"info\">Actions</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let asset of allAssets\">\n\n            \n                <td>{{asset.prescriptionId}}</td>\n            \n                <td>{{asset.patientId}}</td>\n            \n                <td>{{asset.pharmacyId}}</td>\n            \n                <td>{{asset.dateAdded}}</td>\n            \n                <td>{{asset.dateModified}}</td>\n            \n                <td>{{asset.providerId}}</td>\n            \n                <td>{{asset.startDate}}</td>\n            \n                <td>{{asset.drug}}</td>\n            \n                <td>{{asset.dosage}}</td>\n            \n                <td>{{asset.quantity}}</td>\n            \n                <td>{{asset.size}}</td>\n            \n                <td>{{asset.unit}}</td>\n            \n                <td>{{asset.perRefil}}</td>\n            \n                <td>{{asset.filledDate}}</td>\n            \n                <td>{{asset.medication}}</td>\n            \n                <td>{{asset.note}}</td>\n            \n                <td>{{asset.active}}</td>\n            \n            <td>\n              <button (click)=\"getForm(asset.prescriptionId);\" type=\"button\" class=\"btn btn-success\" data-toggle=\"modal\" data-target=\"#updateAssetModal\">Update Asset</button>\n\n              <button (click)=\"setId(asset.prescriptionId);\" type=\"button\" class=\"btn btn-danger\" data-toggle=\"modal\" data-target=\"#deleteAssetModal\">Delete Asset</button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/Prescription/Prescription.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrescriptionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Prescription_service__ = __webpack_require__("./src/app/Prescription/Prescription.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PrescriptionComponent = (function () {
    function PrescriptionComponent(servicePrescription, fb) {
        this.servicePrescription = servicePrescription;
        this.prescriptionId = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required);
        this.patientId = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required);
        this.pharmacyId = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required);
        this.dateAdded = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required);
        this.dateModified = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required);
        this.providerId = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required);
        this.startDate = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required);
        this.drug = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required);
        this.dosage = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required);
        this.quantity = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required);
        this.size = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required);
        this.unit = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required);
        this.perRefil = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required);
        this.filledDate = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required);
        this.medication = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required);
        this.note = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required);
        this.active = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required);
        this.myForm = fb.group({
            prescriptionId: this.prescriptionId,
            patientId: this.patientId,
            pharmacyId: this.pharmacyId,
            dateAdded: this.dateAdded,
            dateModified: this.dateModified,
            providerId: this.providerId,
            startDate: this.startDate,
            drug: this.drug,
            dosage: this.dosage,
            quantity: this.quantity,
            size: this.size,
            unit: this.unit,
            perRefil: this.perRefil,
            filledDate: this.filledDate,
            medication: this.medication,
            note: this.note,
            active: this.active
        });
    }
    ;
    PrescriptionComponent.prototype.ngOnInit = function () {
        this.loadAll();
    };
    PrescriptionComponent.prototype.loadAll = function () {
        var _this = this;
        var tempList = [];
        return this.servicePrescription.getAll()
            .toPromise()
            .then(function (result) {
            _this.errorMessage = null;
            result.forEach(function (asset) {
                tempList.push(asset);
            });
            _this.allAssets = tempList;
        })
            .catch(function (error) {
            if (error == 'Server error') {
                _this.errorMessage = "Could not connect to REST server. Please check your configuration details";
            }
            else if (error == '404 - Not Found') {
                _this.errorMessage = "404 - Could not find API route. Please check your available APIs.";
            }
            else {
                _this.errorMessage = error;
            }
        });
    };
    /**
   * Event handler for changing the checked state of a checkbox (handles array enumeration values)
   * @param {String} name - the name of the asset field to update
   * @param {any} value - the enumeration value for which to toggle the checked state
   */
    PrescriptionComponent.prototype.changeArrayValue = function (name, value) {
        var index = this[name].value.indexOf(value);
        if (index === -1) {
            this[name].value.push(value);
        }
        else {
            this[name].value.splice(index, 1);
        }
    };
    /**
     * Checkbox helper, determining whether an enumeration value should be selected or not (for array enumeration values
   * only). This is used for checkboxes in the asset updateDialog.
   * @param {String} name - the name of the asset field to check
   * @param {any} value - the enumeration value to check for
   * @return {Boolean} whether the specified asset field contains the provided value
   */
    PrescriptionComponent.prototype.hasArrayValue = function (name, value) {
        return this[name].value.indexOf(value) !== -1;
    };
    PrescriptionComponent.prototype.addAsset = function (form) {
        var _this = this;
        this.asset = {
            $class: "org.medichain.mvp.Prescription",
            "prescriptionId": this.prescriptionId.value,
            "patientId": this.patientId.value,
            "pharmacyId": this.pharmacyId.value,
            "dateAdded": this.dateAdded.value,
            "dateModified": this.dateModified.value,
            "providerId": this.providerId.value,
            "startDate": this.startDate.value,
            "drug": this.drug.value,
            "dosage": this.dosage.value,
            "quantity": this.quantity.value,
            "size": this.size.value,
            "unit": this.unit.value,
            "perRefil": this.perRefil.value,
            "filledDate": this.filledDate.value,
            "medication": this.medication.value,
            "note": this.note.value,
            "active": this.active.value
        };
        this.myForm.setValue({
            "prescriptionId": null,
            "patientId": null,
            "pharmacyId": null,
            "dateAdded": null,
            "dateModified": null,
            "providerId": null,
            "startDate": null,
            "drug": null,
            "dosage": null,
            "quantity": null,
            "size": null,
            "unit": null,
            "perRefil": null,
            "filledDate": null,
            "medication": null,
            "note": null,
            "active": null
        });
        return this.servicePrescription.addAsset(this.asset)
            .toPromise()
            .then(function () {
            _this.errorMessage = null;
            _this.myForm.setValue({
                "prescriptionId": null,
                "patientId": null,
                "pharmacyId": null,
                "dateAdded": null,
                "dateModified": null,
                "providerId": null,
                "startDate": null,
                "drug": null,
                "dosage": null,
                "quantity": null,
                "size": null,
                "unit": null,
                "perRefil": null,
                "filledDate": null,
                "medication": null,
                "note": null,
                "active": null
            });
        })
            .catch(function (error) {
            if (error == 'Server error') {
                _this.errorMessage = "Could not connect to REST server. Please check your configuration details";
            }
            else {
                _this.errorMessage = error;
            }
        });
    };
    PrescriptionComponent.prototype.updateAsset = function (form) {
        var _this = this;
        this.asset = {
            $class: "org.medichain.mvp.Prescription",
            "patientId": this.patientId.value,
            "pharmacyId": this.pharmacyId.value,
            "dateAdded": this.dateAdded.value,
            "dateModified": this.dateModified.value,
            "providerId": this.providerId.value,
            "startDate": this.startDate.value,
            "drug": this.drug.value,
            "dosage": this.dosage.value,
            "quantity": this.quantity.value,
            "size": this.size.value,
            "unit": this.unit.value,
            "perRefil": this.perRefil.value,
            "filledDate": this.filledDate.value,
            "medication": this.medication.value,
            "note": this.note.value,
            "active": this.active.value
        };
        return this.servicePrescription.updateAsset(form.get("prescriptionId").value, this.asset)
            .toPromise()
            .then(function () {
            _this.errorMessage = null;
        })
            .catch(function (error) {
            if (error == 'Server error') {
                _this.errorMessage = "Could not connect to REST server. Please check your configuration details";
            }
            else if (error == '404 - Not Found') {
                _this.errorMessage = "404 - Could not find API route. Please check your available APIs.";
            }
            else {
                _this.errorMessage = error;
            }
        });
    };
    PrescriptionComponent.prototype.deleteAsset = function () {
        var _this = this;
        return this.servicePrescription.deleteAsset(this.currentId)
            .toPromise()
            .then(function () {
            _this.errorMessage = null;
        })
            .catch(function (error) {
            if (error == 'Server error') {
                _this.errorMessage = "Could not connect to REST server. Please check your configuration details";
            }
            else if (error == '404 - Not Found') {
                _this.errorMessage = "404 - Could not find API route. Please check your available APIs.";
            }
            else {
                _this.errorMessage = error;
            }
        });
    };
    PrescriptionComponent.prototype.setId = function (id) {
        this.currentId = id;
    };
    PrescriptionComponent.prototype.getForm = function (id) {
        var _this = this;
        return this.servicePrescription.getAsset(id)
            .toPromise()
            .then(function (result) {
            _this.errorMessage = null;
            var formObject = {
                "prescriptionId": null,
                "patientId": null,
                "pharmacyId": null,
                "dateAdded": null,
                "dateModified": null,
                "providerId": null,
                "startDate": null,
                "drug": null,
                "dosage": null,
                "quantity": null,
                "size": null,
                "unit": null,
                "perRefil": null,
                "filledDate": null,
                "medication": null,
                "note": null,
                "active": null
            };
            if (result.prescriptionId) {
                formObject.prescriptionId = result.prescriptionId;
            }
            else {
                formObject.prescriptionId = null;
            }
            if (result.patientId) {
                formObject.patientId = result.patientId;
            }
            else {
                formObject.patientId = null;
            }
            if (result.pharmacyId) {
                formObject.pharmacyId = result.pharmacyId;
            }
            else {
                formObject.pharmacyId = null;
            }
            if (result.dateAdded) {
                formObject.dateAdded = result.dateAdded;
            }
            else {
                formObject.dateAdded = null;
            }
            if (result.dateModified) {
                formObject.dateModified = result.dateModified;
            }
            else {
                formObject.dateModified = null;
            }
            if (result.providerId) {
                formObject.providerId = result.providerId;
            }
            else {
                formObject.providerId = null;
            }
            if (result.startDate) {
                formObject.startDate = result.startDate;
            }
            else {
                formObject.startDate = null;
            }
            if (result.drug) {
                formObject.drug = result.drug;
            }
            else {
                formObject.drug = null;
            }
            if (result.dosage) {
                formObject.dosage = result.dosage;
            }
            else {
                formObject.dosage = null;
            }
            if (result.quantity) {
                formObject.quantity = result.quantity;
            }
            else {
                formObject.quantity = null;
            }
            if (result.size) {
                formObject.size = result.size;
            }
            else {
                formObject.size = null;
            }
            if (result.unit) {
                formObject.unit = result.unit;
            }
            else {
                formObject.unit = null;
            }
            if (result.perRefil) {
                formObject.perRefil = result.perRefil;
            }
            else {
                formObject.perRefil = null;
            }
            if (result.filledDate) {
                formObject.filledDate = result.filledDate;
            }
            else {
                formObject.filledDate = null;
            }
            if (result.medication) {
                formObject.medication = result.medication;
            }
            else {
                formObject.medication = null;
            }
            if (result.note) {
                formObject.note = result.note;
            }
            else {
                formObject.note = null;
            }
            if (result.active) {
                formObject.active = result.active;
            }
            else {
                formObject.active = null;
            }
            _this.myForm.setValue(formObject);
        })
            .catch(function (error) {
            if (error == 'Server error') {
                _this.errorMessage = "Could not connect to REST server. Please check your configuration details";
            }
            else if (error == '404 - Not Found') {
                _this.errorMessage = "404 - Could not find API route. Please check your available APIs.";
            }
            else {
                _this.errorMessage = error;
            }
        });
    };
    PrescriptionComponent.prototype.resetForm = function () {
        this.myForm.setValue({
            "prescriptionId": null,
            "patientId": null,
            "pharmacyId": null,
            "dateAdded": null,
            "dateModified": null,
            "providerId": null,
            "startDate": null,
            "drug": null,
            "dosage": null,
            "quantity": null,
            "size": null,
            "unit": null,
            "perRefil": null,
            "filledDate": null,
            "medication": null,
            "note": null,
            "active": null
        });
    };
    PrescriptionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-Prescription',
            template: __webpack_require__("./src/app/Prescription/Prescription.component.html"),
            styles: [__webpack_require__("./src/app/Prescription/Prescription.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__Prescription_service__["a" /* PrescriptionService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__Prescription_service__["a" /* PrescriptionService */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]])
    ], PrescriptionComponent);
    return PrescriptionComponent;
}());



/***/ }),

/***/ "./src/app/Prescription/Prescription.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrescriptionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Can be injected into a constructor
var PrescriptionService = (function () {
    function PrescriptionService(dataService) {
        this.dataService = dataService;
        this.NAMESPACE = 'org.medichain.mvp.Prescription';
    }
    ;
    PrescriptionService.prototype.getAll = function () {
        return this.dataService.getAll(this.NAMESPACE);
    };
    PrescriptionService.prototype.getAsset = function (id) {
        return this.dataService.getSingle(this.NAMESPACE, id);
    };
    PrescriptionService.prototype.addAsset = function (itemToAdd) {
        return this.dataService.add(this.NAMESPACE, itemToAdd);
    };
    PrescriptionService.prototype.updateAsset = function (id, itemToUpdate) {
        return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    };
    PrescriptionService.prototype.deleteAsset = function (id) {
        return this.dataService.delete(this.NAMESPACE, id);
    };
    PrescriptionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]])
    ], PrescriptionService);
    return PrescriptionService;
}());



/***/ }),

/***/ "./src/app/ProfileInformation/ProfileInformation.component.css":
/***/ (function(module, exports) {

module.exports = "{}\n"

/***/ }),

/***/ "./src/app/ProfileInformation/ProfileInformation.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" id=\"addAssetModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"addAssetModalLabel\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title\" id=\"addAssetModalLabel\">Add Asset</h4>\n      </div>\n      <form [formGroup]=\"myForm\">\n        <div class=\"modal-body\">\n\n\n          \n\n            \n              <div class=\"form-group text-left\">\n                <label for=\"patientId\">patientId</label>\n                \n                  <input formControlName=\"patientId\" type=\"text\" class=\"form-control\">\n                \n              </div>\n            \n          \n\n            \n              <div class=\"form-group text-left\">\n                <label for=\"userName\">userName</label>\n                \n                  <input formControlName=\"userName\" type=\"text\" class=\"form-control\">\n                \n              </div>\n            \n          \n\n            \n              <div class=\"form-group text-left\">\n                <label for=\"firstName\">firstName</label>\n                \n                  <input formControlName=\"firstName\" type=\"text\" class=\"form-control\">\n                \n              </div>\n            \n          \n\n            \n              <div class=\"form-group text-left\">\n                <label for=\"middleName\">middleName</label>\n                \n                  <input formControlName=\"middleName\" type=\"text\" class=\"form-control\">\n                \n              </div>\n            \n          \n\n            \n              <div class=\"form-group text-left\">\n                <label for=\"lastName\">lastName</label>\n                \n                  <input formControlName=\"lastName\" type=\"text\" class=\"form-control\">\n                \n              </div>\n            \n          \n\n            \n              <label for=\"sex\">sex</label>\n              <div class=\"checkbox\">\n                \n                  <label>\n                    <input\n                      \n                        formControlName=\"sex\"\n                      \n                      name=\"sex\"\n                      value=\"Male\"\n                      type=\"radio\"\n                      \n                    />\n                    Male\n                  </label>\n                \n                  <label>\n                    <input\n                      \n                        formControlName=\"sex\"\n                      \n                      name=\"sex\"\n                      value=\"Female\"\n                      type=\"radio\"\n                      \n                    />\n                    Female\n                  </label>\n                \n                  <label>\n                    <input\n                      \n                        formControlName=\"sex\"\n                      \n                      name=\"sex\"\n                      value=\"Undisclosed\"\n                      type=\"radio\"\n                      \n                    />\n                    Undisclosed\n                  </label>\n                \n              </div>\n            \n          \n\n            \n              <div class=\"form-group text-left\">\n                <label for=\"source\">source</label>\n                \n                  <input formControlName=\"source\" type=\"text\" class=\"form-control\">\n                \n              </div>\n            \n          \n\n            \n              <div class=\"form-group text-left\">\n                <label for=\"facility\">facility</label>\n                \n                  <input formControlName=\"facility\" type=\"text\" class=\"form-control\">\n                \n              </div>\n            \n          \n\n            \n              <div class=\"form-group text-left\">\n                <label for=\"facilityId\">facilityId</label>\n                \n                  <input formControlName=\"facilityId\" type=\"text\" class=\"form-control\">\n                \n              </div>\n            \n          \n\n            \n              <div class=\"form-group text-left\">\n                <label for=\"currentPrescriptions\">currentPrescriptions</label>\n                \n                    <textarea formControlName=\"currentPrescriptions\" class=\"form-control\" rows=\"3\"></textarea>\n                \n              </div>\n            \n          \n\n            \n              <div class=\"form-group text-left\">\n                <label for=\"dateOfBirth\">dateOfBirth</label>\n                \n                  <input formControlName=\"dateOfBirth\" type=\"text\" class=\"form-control\">\n                \n              </div>\n            \n          \n\n            \n              <div class=\"form-group text-left\">\n                <label for=\"phoneNumber\">phoneNumber</label>\n                \n                  <input formControlName=\"phoneNumber\" type=\"number\" class=\"form-control\">\n                \n              </div>\n            \n          \n\n            \n              <div class=\"form-group text-left\">\n                <label for=\"streetAddress\">streetAddress</label>\n                \n                  <input formControlName=\"streetAddress\" type=\"text\" class=\"form-control\">\n                \n              </div>\n            \n          \n\n            \n              <div class=\"form-group text-left\">\n                <label for=\"city\">city</label>\n                \n                  <input formControlName=\"city\" type=\"text\" class=\"form-control\">\n                \n              </div>\n            \n          \n\n            \n              <div class=\"form-group text-left\">\n                <label for=\"state\">state</label>\n                \n                  <input formControlName=\"state\" type=\"text\" class=\"form-control\">\n                \n              </div>\n            \n          \n\n            \n              <div class=\"form-group text-left\">\n                <label for=\"country\">country</label>\n                \n                  <input formControlName=\"country\" type=\"text\" class=\"form-control\">\n                \n              </div>\n            \n          \n\n            \n              <div class=\"form-group text-left\">\n                <label for=\"zipCode\">zipCode</label>\n                \n                  <input formControlName=\"zipCode\" type=\"text\" class=\"form-control\">\n                \n              </div>\n            \n          \n\n            \n              <div class=\"form-group text-left\">\n                <label for=\"email\">email</label>\n                \n                  <input formControlName=\"email\" type=\"text\" class=\"form-control\">\n                \n              </div>\n            \n          \n\n            \n              <div class=\"form-group text-left\">\n                <label for=\"numberOfConsultations\">numberOfConsultations</label>\n                \n                  <input formControlName=\"numberOfConsultations\" type=\"number\" class=\"form-control\">\n                \n              </div>\n            \n          \n\n        </div>\n        <div class=\"modal-footer\">\n          <button (click)=\"addAsset(myForm);\" type=\"submit\" class=\"btn btn-success\" data-dismiss=\"modal\">Submit</button>\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n\n\n\n<div class=\"modal fade\" id=\"updateAssetModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"updateAssetModalLabel\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title\" id=\"updateAssetModalLabel\">Update Asset</h4>\n      </div>\n      <form [formGroup]=\"myForm\">\n        <div class=\"modal-body\">\n\n\n          \n            <div class=\"form-group text-left\">\n              <label for=\"patientId\">patientId</label>\n\n              \n                <input [ngModel]=\"patientId\"formControlName=\"patientId\" type=\"text\" class=\"form-control\">\n              \n\n            </div>\n          \n            <div class=\"form-group text-left\">\n              <label for=\"userName\">userName</label>\n\n              \n                <input [ngModel]=\"userName\"formControlName=\"userName\" type=\"text\" class=\"form-control\">\n              \n\n            </div>\n          \n            <div class=\"form-group text-left\">\n              <label for=\"firstName\">firstName</label>\n\n              \n                <input [ngModel]=\"firstName\"formControlName=\"firstName\" type=\"text\" class=\"form-control\">\n              \n\n            </div>\n          \n            <div class=\"form-group text-left\">\n              <label for=\"middleName\">middleName</label>\n\n              \n                <input [ngModel]=\"middleName\"formControlName=\"middleName\" type=\"text\" class=\"form-control\">\n              \n\n            </div>\n          \n            <div class=\"form-group text-left\">\n              <label for=\"lastName\">lastName</label>\n\n              \n                <input [ngModel]=\"lastName\"formControlName=\"lastName\" type=\"text\" class=\"form-control\">\n              \n\n            </div>\n          \n            <div class=\"form-group text-left\">\n              <label for=\"sex\">sex</label>\n\n              \n                \n                  <div class=\"row\">\n                    <div class=\"col-xs-12 checkbox\">\n                    \n                      <label>\n                        <input\n                          \n                            formControlName=\"sex\"\n                            [ngModel]=\"sex\"\n                          \n                          name=\"sex\"\n                          value=\"Male\"\n                          type=\"radio\"\n                          \n                        />\n                        Male\n                      </label>\n                    \n                      <label>\n                        <input\n                          \n                            formControlName=\"sex\"\n                            [ngModel]=\"sex\"\n                          \n                          name=\"sex\"\n                          value=\"Female\"\n                          type=\"radio\"\n                          \n                        />\n                        Female\n                      </label>\n                    \n                      <label>\n                        <input\n                          \n                            formControlName=\"sex\"\n                            [ngModel]=\"sex\"\n                          \n                          name=\"sex\"\n                          value=\"Undisclosed\"\n                          type=\"radio\"\n                          \n                        />\n                        Undisclosed\n                      </label>\n                    \n                    </div>\n                  </div>\n                \n              \n\n            </div>\n          \n            <div class=\"form-group text-left\">\n              <label for=\"source\">source</label>\n\n              \n                <input [ngModel]=\"source\"formControlName=\"source\" type=\"text\" class=\"form-control\">\n              \n\n            </div>\n          \n            <div class=\"form-group text-left\">\n              <label for=\"facility\">facility</label>\n\n              \n                <input [ngModel]=\"facility\"formControlName=\"facility\" type=\"text\" class=\"form-control\">\n              \n\n            </div>\n          \n            <div class=\"form-group text-left\">\n              <label for=\"facilityId\">facilityId</label>\n\n              \n                <input [ngModel]=\"facilityId\"formControlName=\"facilityId\" type=\"text\" class=\"form-control\">\n              \n\n            </div>\n          \n            <div class=\"form-group text-left\">\n              <label for=\"currentPrescriptions\">currentPrescriptions</label>\n\n              \n                \n                  <textarea [ngModel]=\"currentPrescriptions\" formControlName=\"currentPrescriptions\" class=\"form-control\" rows=\"3\"></textarea>\n                \n              \n\n            </div>\n          \n            <div class=\"form-group text-left\">\n              <label for=\"dateOfBirth\">dateOfBirth</label>\n\n              \n                <input [ngModel]=\"dateOfBirth\"formControlName=\"dateOfBirth\" type=\"text\" class=\"form-control\">\n              \n\n            </div>\n          \n            <div class=\"form-group text-left\">\n              <label for=\"phoneNumber\">phoneNumber</label>\n\n              \n                <input [ngModel]=\"phoneNumber\" formControlName=\"phoneNumber\" type=\"number\" class=\"form-control\">\n              \n\n            </div>\n          \n            <div class=\"form-group text-left\">\n              <label for=\"streetAddress\">streetAddress</label>\n\n              \n                <input [ngModel]=\"streetAddress\"formControlName=\"streetAddress\" type=\"text\" class=\"form-control\">\n              \n\n            </div>\n          \n            <div class=\"form-group text-left\">\n              <label for=\"city\">city</label>\n\n              \n                <input [ngModel]=\"city\"formControlName=\"city\" type=\"text\" class=\"form-control\">\n              \n\n            </div>\n          \n            <div class=\"form-group text-left\">\n              <label for=\"state\">state</label>\n\n              \n                <input [ngModel]=\"state\"formControlName=\"state\" type=\"text\" class=\"form-control\">\n              \n\n            </div>\n          \n            <div class=\"form-group text-left\">\n              <label for=\"country\">country</label>\n\n              \n                <input [ngModel]=\"country\"formControlName=\"country\" type=\"text\" class=\"form-control\">\n              \n\n            </div>\n          \n            <div class=\"form-group text-left\">\n              <label for=\"zipCode\">zipCode</label>\n\n              \n                <input [ngModel]=\"zipCode\"formControlName=\"zipCode\" type=\"text\" class=\"form-control\">\n              \n\n            </div>\n          \n            <div class=\"form-group text-left\">\n              <label for=\"email\">email</label>\n\n              \n                <input [ngModel]=\"email\"formControlName=\"email\" type=\"text\" class=\"form-control\">\n              \n\n            </div>\n          \n            <div class=\"form-group text-left\">\n              <label for=\"numberOfConsultations\">numberOfConsultations</label>\n\n              \n                <input [ngModel]=\"numberOfConsultations\" formControlName=\"numberOfConsultations\" type=\"number\" class=\"form-control\">\n              \n\n            </div>\n          \n\n\n        </div>\n        <div class=\"modal-footer\">\n          <button (click)=\"updateAsset(myForm)\" type=\"submit\" class=\"btn btn-success\" data-dismiss=\"modal\">Submit</button>\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n\n\n<div class=\"modal fade\" id=\"deleteAssetModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"deleteAssetModalLabel\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title\" id=\"deleteAssetModalLabel\">Delete Asset</h4>\n      </div>\n      <form [formGroup]=\"myForm\" (ngSubmit)=\"deleteAsset()\">\n        <div class=\"modal-body\">\n          Are you sure you want to delete this asset?\n        </div>\n        <div class=\"modal-footer\">\n          <button (click)=\"deleteAsset()\" type=\"submit\" class=\"btn btn-danger\" data-dismiss=\"modal\">Yes</button>\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">No</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n\n\n\n\n\n\n\n\n\n\n<div class=\"container\">\n\t<div *ngIf=\"errorMessage\" class=\"alert alert-danger\" role=\"alert\">\n\t\t<strong>Error:</strong> {{errorMessage}}\n\t</div>\n  <h1 id='assetName'>ProfileInformation</h1>\n  <div class=\"row\">\n    <div class=\"col-md-12 text-right\">\n      <button (click)=\"resetForm()\" type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#addAssetModal\">Add Asset</button>\n    </div>\n  </div>\n  <br>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <table class=\"table table-bordered table-responsive table-striped\">\n        <thead class=\"thead\">\n          <tr class=\"thead-cols\">\n            \n                <th class=\"info\">patientId</th>\n            \n                <th class=\"info\">userName</th>\n            \n                <th class=\"info\">firstName</th>\n            \n                <th class=\"info\">middleName</th>\n            \n                <th class=\"info\">lastName</th>\n            \n                <th class=\"info\">sex</th>\n            \n                <th class=\"info\">source</th>\n            \n                <th class=\"info\">facility</th>\n            \n                <th class=\"info\">facilityId</th>\n            \n                <th class=\"info\">currentPrescriptions</th>\n            \n                <th class=\"info\">dateOfBirth</th>\n            \n                <th class=\"info\">phoneNumber</th>\n            \n                <th class=\"info\">streetAddress</th>\n            \n                <th class=\"info\">city</th>\n            \n                <th class=\"info\">state</th>\n            \n                <th class=\"info\">country</th>\n            \n                <th class=\"info\">zipCode</th>\n            \n                <th class=\"info\">email</th>\n            \n                <th class=\"info\">numberOfConsultations</th>\n            \n              <th class=\"info\">Actions</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let asset of allAssets\">\n\n            \n                <td>{{asset.patientId}}</td>\n            \n                <td>{{asset.userName}}</td>\n            \n                <td>{{asset.firstName}}</td>\n            \n                <td>{{asset.middleName}}</td>\n            \n                <td>{{asset.lastName}}</td>\n            \n                <td>{{asset.sex}}</td>\n            \n                <td>{{asset.source}}</td>\n            \n                <td>{{asset.facility}}</td>\n            \n                <td>{{asset.facilityId}}</td>\n            \n                <td>{{asset.currentPrescriptions}}</td>\n            \n                <td>{{asset.dateOfBirth}}</td>\n            \n                <td>{{asset.phoneNumber}}</td>\n            \n                <td>{{asset.streetAddress}}</td>\n            \n                <td>{{asset.city}}</td>\n            \n                <td>{{asset.state}}</td>\n            \n                <td>{{asset.country}}</td>\n            \n                <td>{{asset.zipCode}}</td>\n            \n                <td>{{asset.email}}</td>\n            \n                <td>{{asset.numberOfConsultations}}</td>\n            \n            <td>\n              <button (click)=\"getForm(asset.patientId);\" type=\"button\" class=\"btn btn-success\" data-toggle=\"modal\" data-target=\"#updateAssetModal\">Update Asset</button>\n\n              <button (click)=\"setId(asset.patientId);\" type=\"button\" class=\"btn btn-danger\" data-toggle=\"modal\" data-target=\"#deleteAssetModal\">Delete Asset</button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/ProfileInformation/ProfileInformation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileInformationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ProfileInformation_service__ = __webpack_require__("./src/app/ProfileInformation/ProfileInformation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileInformationComponent = (function () {
    function ProfileInformationComponent(serviceProfileInformation, fb) {
        this.serviceProfileInformation = serviceProfileInformation;
        this.patientId = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required);
        this.userName = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required);
        this.firstName = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required);
        this.middleName = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required);
        this.lastName = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required);
        this.sex = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required);
        this.source = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required);
        this.facility = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required);
        this.facilityId = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required);
        this.currentPrescriptions = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required);
        this.dateOfBirth = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required);
        this.phoneNumber = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required);
        this.streetAddress = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required);
        this.city = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required);
        this.state = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required);
        this.country = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required);
        this.zipCode = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required);
        this.email = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required);
        this.numberOfConsultations = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required);
        this.myForm = fb.group({
            patientId: this.patientId,
            userName: this.userName,
            firstName: this.firstName,
            middleName: this.middleName,
            lastName: this.lastName,
            sex: this.sex,
            source: this.source,
            facility: this.facility,
            facilityId: this.facilityId,
            currentPrescriptions: this.currentPrescriptions,
            dateOfBirth: this.dateOfBirth,
            phoneNumber: this.phoneNumber,
            streetAddress: this.streetAddress,
            city: this.city,
            state: this.state,
            country: this.country,
            zipCode: this.zipCode,
            email: this.email,
            numberOfConsultations: this.numberOfConsultations
        });
    }
    ;
    ProfileInformationComponent.prototype.ngOnInit = function () {
        this.loadAll();
    };
    ProfileInformationComponent.prototype.loadAll = function () {
        var _this = this;
        var tempList = [];
        return this.serviceProfileInformation.getAll()
            .toPromise()
            .then(function (result) {
            _this.errorMessage = null;
            result.forEach(function (asset) {
                tempList.push(asset);
            });
            _this.allAssets = tempList;
        })
            .catch(function (error) {
            if (error == 'Server error') {
                _this.errorMessage = "Could not connect to REST server. Please check your configuration details";
            }
            else if (error == '404 - Not Found') {
                _this.errorMessage = "404 - Could not find API route. Please check your available APIs.";
            }
            else {
                _this.errorMessage = error;
            }
        });
    };
    /**
   * Event handler for changing the checked state of a checkbox (handles array enumeration values)
   * @param {String} name - the name of the asset field to update
   * @param {any} value - the enumeration value for which to toggle the checked state
   */
    ProfileInformationComponent.prototype.changeArrayValue = function (name, value) {
        var index = this[name].value.indexOf(value);
        if (index === -1) {
            this[name].value.push(value);
        }
        else {
            this[name].value.splice(index, 1);
        }
    };
    /**
     * Checkbox helper, determining whether an enumeration value should be selected or not (for array enumeration values
   * only). This is used for checkboxes in the asset updateDialog.
   * @param {String} name - the name of the asset field to check
   * @param {any} value - the enumeration value to check for
   * @return {Boolean} whether the specified asset field contains the provided value
   */
    ProfileInformationComponent.prototype.hasArrayValue = function (name, value) {
        return this[name].value.indexOf(value) !== -1;
    };
    ProfileInformationComponent.prototype.addAsset = function (form) {
        var _this = this;
        this.asset = {
            $class: "org.medichain.mvp.ProfileInformation",
            "patientId": this.patientId.value,
            "userName": this.userName.value,
            "firstName": this.firstName.value,
            "middleName": this.middleName.value,
            "lastName": this.lastName.value,
            "sex": this.sex.value,
            "source": this.source.value,
            "facility": this.facility.value,
            "facilityId": this.facilityId.value,
            "currentPrescriptions": this.currentPrescriptions.value,
            "dateOfBirth": this.dateOfBirth.value,
            "phoneNumber": this.phoneNumber.value,
            "streetAddress": this.streetAddress.value,
            "city": this.city.value,
            "state": this.state.value,
            "country": this.country.value,
            "zipCode": this.zipCode.value,
            "email": this.email.value,
            "numberOfConsultations": this.numberOfConsultations.value
        };
        this.myForm.setValue({
            "patientId": null,
            "userName": null,
            "firstName": null,
            "middleName": null,
            "lastName": null,
            "sex": null,
            "source": null,
            "facility": null,
            "facilityId": null,
            "currentPrescriptions": null,
            "dateOfBirth": null,
            "phoneNumber": null,
            "streetAddress": null,
            "city": null,
            "state": null,
            "country": null,
            "zipCode": null,
            "email": null,
            "numberOfConsultations": null
        });
        return this.serviceProfileInformation.addAsset(this.asset)
            .toPromise()
            .then(function () {
            _this.errorMessage = null;
            _this.myForm.setValue({
                "patientId": null,
                "userName": null,
                "firstName": null,
                "middleName": null,
                "lastName": null,
                "sex": null,
                "source": null,
                "facility": null,
                "facilityId": null,
                "currentPrescriptions": null,
                "dateOfBirth": null,
                "phoneNumber": null,
                "streetAddress": null,
                "city": null,
                "state": null,
                "country": null,
                "zipCode": null,
                "email": null,
                "numberOfConsultations": null
            });
        })
            .catch(function (error) {
            if (error == 'Server error') {
                _this.errorMessage = "Could not connect to REST server. Please check your configuration details";
            }
            else {
                _this.errorMessage = error;
            }
        });
    };
    ProfileInformationComponent.prototype.updateAsset = function (form) {
        var _this = this;
        this.asset = {
            $class: "org.medichain.mvp.ProfileInformation",
            "userName": this.userName.value,
            "firstName": this.firstName.value,
            "middleName": this.middleName.value,
            "lastName": this.lastName.value,
            "sex": this.sex.value,
            "source": this.source.value,
            "facility": this.facility.value,
            "facilityId": this.facilityId.value,
            "currentPrescriptions": this.currentPrescriptions.value,
            "dateOfBirth": this.dateOfBirth.value,
            "phoneNumber": this.phoneNumber.value,
            "streetAddress": this.streetAddress.value,
            "city": this.city.value,
            "state": this.state.value,
            "country": this.country.value,
            "zipCode": this.zipCode.value,
            "email": this.email.value,
            "numberOfConsultations": this.numberOfConsultations.value
        };
        return this.serviceProfileInformation.updateAsset(form.get("patientId").value, this.asset)
            .toPromise()
            .then(function () {
            _this.errorMessage = null;
        })
            .catch(function (error) {
            if (error == 'Server error') {
                _this.errorMessage = "Could not connect to REST server. Please check your configuration details";
            }
            else if (error == '404 - Not Found') {
                _this.errorMessage = "404 - Could not find API route. Please check your available APIs.";
            }
            else {
                _this.errorMessage = error;
            }
        });
    };
    ProfileInformationComponent.prototype.deleteAsset = function () {
        var _this = this;
        return this.serviceProfileInformation.deleteAsset(this.currentId)
            .toPromise()
            .then(function () {
            _this.errorMessage = null;
        })
            .catch(function (error) {
            if (error == 'Server error') {
                _this.errorMessage = "Could not connect to REST server. Please check your configuration details";
            }
            else if (error == '404 - Not Found') {
                _this.errorMessage = "404 - Could not find API route. Please check your available APIs.";
            }
            else {
                _this.errorMessage = error;
            }
        });
    };
    ProfileInformationComponent.prototype.setId = function (id) {
        this.currentId = id;
    };
    ProfileInformationComponent.prototype.getForm = function (id) {
        var _this = this;
        return this.serviceProfileInformation.getAsset(id)
            .toPromise()
            .then(function (result) {
            _this.errorMessage = null;
            var formObject = {
                "patientId": null,
                "userName": null,
                "firstName": null,
                "middleName": null,
                "lastName": null,
                "sex": null,
                "source": null,
                "facility": null,
                "facilityId": null,
                "currentPrescriptions": null,
                "dateOfBirth": null,
                "phoneNumber": null,
                "streetAddress": null,
                "city": null,
                "state": null,
                "country": null,
                "zipCode": null,
                "email": null,
                "numberOfConsultations": null
            };
            if (result.patientId) {
                formObject.patientId = result.patientId;
            }
            else {
                formObject.patientId = null;
            }
            if (result.userName) {
                formObject.userName = result.userName;
            }
            else {
                formObject.userName = null;
            }
            if (result.firstName) {
                formObject.firstName = result.firstName;
            }
            else {
                formObject.firstName = null;
            }
            if (result.middleName) {
                formObject.middleName = result.middleName;
            }
            else {
                formObject.middleName = null;
            }
            if (result.lastName) {
                formObject.lastName = result.lastName;
            }
            else {
                formObject.lastName = null;
            }
            if (result.sex) {
                formObject.sex = result.sex;
            }
            else {
                formObject.sex = null;
            }
            if (result.source) {
                formObject.source = result.source;
            }
            else {
                formObject.source = null;
            }
            if (result.facility) {
                formObject.facility = result.facility;
            }
            else {
                formObject.facility = null;
            }
            if (result.facilityId) {
                formObject.facilityId = result.facilityId;
            }
            else {
                formObject.facilityId = null;
            }
            if (result.currentPrescriptions) {
                formObject.currentPrescriptions = result.currentPrescriptions;
            }
            else {
                formObject.currentPrescriptions = null;
            }
            if (result.dateOfBirth) {
                formObject.dateOfBirth = result.dateOfBirth;
            }
            else {
                formObject.dateOfBirth = null;
            }
            if (result.phoneNumber) {
                formObject.phoneNumber = result.phoneNumber;
            }
            else {
                formObject.phoneNumber = null;
            }
            if (result.streetAddress) {
                formObject.streetAddress = result.streetAddress;
            }
            else {
                formObject.streetAddress = null;
            }
            if (result.city) {
                formObject.city = result.city;
            }
            else {
                formObject.city = null;
            }
            if (result.state) {
                formObject.state = result.state;
            }
            else {
                formObject.state = null;
            }
            if (result.country) {
                formObject.country = result.country;
            }
            else {
                formObject.country = null;
            }
            if (result.zipCode) {
                formObject.zipCode = result.zipCode;
            }
            else {
                formObject.zipCode = null;
            }
            if (result.email) {
                formObject.email = result.email;
            }
            else {
                formObject.email = null;
            }
            if (result.numberOfConsultations) {
                formObject.numberOfConsultations = result.numberOfConsultations;
            }
            else {
                formObject.numberOfConsultations = null;
            }
            _this.myForm.setValue(formObject);
        })
            .catch(function (error) {
            if (error == 'Server error') {
                _this.errorMessage = "Could not connect to REST server. Please check your configuration details";
            }
            else if (error == '404 - Not Found') {
                _this.errorMessage = "404 - Could not find API route. Please check your available APIs.";
            }
            else {
                _this.errorMessage = error;
            }
        });
    };
    ProfileInformationComponent.prototype.resetForm = function () {
        this.myForm.setValue({
            "patientId": null,
            "userName": null,
            "firstName": null,
            "middleName": null,
            "lastName": null,
            "sex": null,
            "source": null,
            "facility": null,
            "facilityId": null,
            "currentPrescriptions": null,
            "dateOfBirth": null,
            "phoneNumber": null,
            "streetAddress": null,
            "city": null,
            "state": null,
            "country": null,
            "zipCode": null,
            "email": null,
            "numberOfConsultations": null
        });
    };
    ProfileInformationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-ProfileInformation',
            template: __webpack_require__("./src/app/ProfileInformation/ProfileInformation.component.html"),
            styles: [__webpack_require__("./src/app/ProfileInformation/ProfileInformation.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__ProfileInformation_service__["a" /* ProfileInformationService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ProfileInformation_service__["a" /* ProfileInformationService */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]])
    ], ProfileInformationComponent);
    return ProfileInformationComponent;
}());



/***/ }),

/***/ "./src/app/ProfileInformation/ProfileInformation.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileInformationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Can be injected into a constructor
var ProfileInformationService = (function () {
    function ProfileInformationService(dataService) {
        this.dataService = dataService;
        this.NAMESPACE = 'ProfileInformation';
    }
    ;
    ProfileInformationService.prototype.getAll = function () {
        return this.dataService.getAll(this.NAMESPACE);
    };
    ProfileInformationService.prototype.getAsset = function (id) {
        return this.dataService.getSingle(this.NAMESPACE, id);
    };
    ProfileInformationService.prototype.addAsset = function (itemToAdd) {
        return this.dataService.add(this.NAMESPACE, itemToAdd);
    };
    ProfileInformationService.prototype.updateAsset = function (id, itemToUpdate) {
        return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    };
    ProfileInformationService.prototype.deleteAsset = function (id) {
        return this.dataService.delete(this.NAMESPACE, id);
    };
    ProfileInformationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]])
    ], ProfileInformationService);
    return ProfileInformationService;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"sidebar\" data-color=\"danger\" data-background-color=\"white\" data-image=\"../assets/img/sidebar-1.jpg\">\n        <app-sidebar></app-sidebar>\n        <div class=\"sidebar-background\" style=\"background-image: url(../assets/img/sidebar-4.jpg)\"></div>\n    </div>\n    <div class=\"main-panel\">\n        <app-navbar></app-navbar>\n        <router-outlet></router-outlet>\n        <div *ngIf=\"isMaps('maps')\">\n            <!-- <app-footer></app-footer> -->\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_perfect_scrollbar__ = __webpack_require__("./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = (function () {
    function AppComponent(location, router) {
        this.location = location;
        this.router = router;
        this.yScrollStack = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        var isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
        if (isWindows && !document.getElementsByTagName('body')[0].classList.contains('sidebar-mini')) {
            // if we are on windows OS we activate the perfectScrollbar function
            document.getElementsByTagName('body')[0].classList.add('perfect-scrollbar-on');
        }
        else {
            document.getElementsByTagName('body')[0].classList.remove('perfect-scrollbar-off');
        }
        var elemMainPanel = document.querySelector('.main-panel');
        var elemSidebar = document.querySelector('.sidebar .sidebar-wrapper');
        this.location.subscribe(function (ev) {
            _this.lastPoppedUrl = ev.url;
        });
        this.router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* NavigationStart */]) {
                if (event.url != _this.lastPoppedUrl)
                    _this.yScrollStack.push(window.scrollY);
            }
            else if (event instanceof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* NavigationEnd */]) {
                if (event.url == _this.lastPoppedUrl) {
                    _this.lastPoppedUrl = undefined;
                    window.scrollTo(0, _this.yScrollStack.pop());
                }
                else
                    window.scrollTo(0, 0);
            }
        });
        this._router = this.router.events.filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* NavigationEnd */]; }).subscribe(function (event) {
            elemMainPanel.scrollTop = 0;
            elemSidebar.scrollTop = 0;
        });
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var ps = new __WEBPACK_IMPORTED_MODULE_4_perfect_scrollbar__["a" /* default */](elemMainPanel);
            ps = new __WEBPACK_IMPORTED_MODULE_4_perfect_scrollbar__["a" /* default */](elemSidebar);
        }
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        this.runOnRouteChange();
    };
    AppComponent.prototype.isMaps = function (path) {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice(1);
        if (path == titlee) {
            return false;
        }
        else {
            return true;
        }
    };
    AppComponent.prototype.runOnRouteChange = function () {
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var elemMainPanel = document.querySelector('.main-panel');
            var ps = new __WEBPACK_IMPORTED_MODULE_4_perfect_scrollbar__["a" /* default */](elemMainPanel);
            ps.update();
        }
    };
    AppComponent.prototype.isMac = function () {
        var bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing__ = __webpack_require__("./src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_components_module__ = __webpack_require__("./src/app/components/components.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dashboard_dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__user_profile_user_profile_component__ = __webpack_require__("./src/app/user-profile/user-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__table_list_table_list_component__ = __webpack_require__("./src/app/table-list/table-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__typography_typography_component__ = __webpack_require__("./src/app/typography/typography.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__icons_icons_component__ = __webpack_require__("./src/app/icons/icons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__maps_maps_component__ = __webpack_require__("./src/app/maps/maps.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__notifications_notifications_component__ = __webpack_require__("./src/app/notifications/notifications.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__upgrade_upgrade_component__ = __webpack_require__("./src/app/upgrade/upgrade.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__configuration__ = __webpack_require__("./src/app/configuration.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ProfileInformation_ProfileInformation_component__ = __webpack_require__("./src/app/ProfileInformation/ProfileInformation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__PatientMasterData_PatientMasterData_component__ = __webpack_require__("./src/app/PatientMasterData/PatientMasterData.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__Prescription_Prescription_component__ = __webpack_require__("./src/app/Prescription/Prescription.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ConsultationInformation_ConsultationInformation_component__ = __webpack_require__("./src/app/ConsultationInformation/ConsultationInformation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__InsuranceData_InsuranceData_component__ = __webpack_require__("./src/app/InsuranceData/InsuranceData.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ImmunizationRecord_ImmunizationRecord_component__ = __webpack_require__("./src/app/ImmunizationRecord/ImmunizationRecord.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















// import { TransactionComponent } from './Transaction/Transaction.component'







var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_7__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["d" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["d" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_6__app_routing__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_26__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
                })
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_10__user_profile_user_profile_component__["a" /* UserProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_11__table_list_table_list_component__["a" /* TableListComponent */],
                __WEBPACK_IMPORTED_MODULE_12__typography_typography_component__["a" /* TypographyComponent */],
                __WEBPACK_IMPORTED_MODULE_13__icons_icons_component__["a" /* IconsComponent */],
                __WEBPACK_IMPORTED_MODULE_14__maps_maps_component__["a" /* MapsComponent */],
                __WEBPACK_IMPORTED_MODULE_15__notifications_notifications_component__["a" /* NotificationsComponent */],
                __WEBPACK_IMPORTED_MODULE_16__upgrade_upgrade_component__["a" /* UpgradeComponent */],
                __WEBPACK_IMPORTED_MODULE_17__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_20__ProfileInformation_ProfileInformation_component__["a" /* ProfileInformationComponent */],
                __WEBPACK_IMPORTED_MODULE_21__PatientMasterData_PatientMasterData_component__["a" /* PatientMasterDataComponent */],
                __WEBPACK_IMPORTED_MODULE_22__Prescription_Prescription_component__["a" /* PrescriptionComponent */],
                __WEBPACK_IMPORTED_MODULE_23__ConsultationInformation_ConsultationInformation_component__["a" /* ConsultationInformationComponent */],
                __WEBPACK_IMPORTED_MODULE_24__InsuranceData_InsuranceData_component__["a" /* InsuranceDataComponent */],
                __WEBPACK_IMPORTED_MODULE_25__ImmunizationRecord_ImmunizationRecord_component__["a" /* ImmunizationRecordComponent */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_18__configuration__["a" /* Configuration */],
                __WEBPACK_IMPORTED_MODULE_19__data_service__["a" /* DataService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_profile_user_profile_component__ = __webpack_require__("./src/app/user-profile/user-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__table_list_table_list_component__ = __webpack_require__("./src/app/table-list/table-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__typography_typography_component__ = __webpack_require__("./src/app/typography/typography.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__icons_icons_component__ = __webpack_require__("./src/app/icons/icons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__maps_maps_component__ = __webpack_require__("./src/app/maps/maps.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__notifications_notifications_component__ = __webpack_require__("./src/app/notifications/notifications.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__upgrade_upgrade_component__ = __webpack_require__("./src/app/upgrade/upgrade.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ProfileInformation_ProfileInformation_component__ = __webpack_require__("./src/app/ProfileInformation/ProfileInformation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__PatientMasterData_PatientMasterData_component__ = __webpack_require__("./src/app/PatientMasterData/PatientMasterData.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__Prescription_Prescription_component__ = __webpack_require__("./src/app/Prescription/Prescription.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ConsultationInformation_ConsultationInformation_component__ = __webpack_require__("./src/app/ConsultationInformation/ConsultationInformation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__InsuranceData_InsuranceData_component__ = __webpack_require__("./src/app/InsuranceData/InsuranceData.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ImmunizationRecord_ImmunizationRecord_component__ = __webpack_require__("./src/app/ImmunizationRecord/ImmunizationRecord.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var routes = [
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'user-profile', component: __WEBPACK_IMPORTED_MODULE_5__user_profile_user_profile_component__["a" /* UserProfileComponent */] },
    { path: 'table-list', component: __WEBPACK_IMPORTED_MODULE_6__table_list_table_list_component__["a" /* TableListComponent */] },
    { path: 'typography', component: __WEBPACK_IMPORTED_MODULE_7__typography_typography_component__["a" /* TypographyComponent */] },
    { path: 'icons', component: __WEBPACK_IMPORTED_MODULE_8__icons_icons_component__["a" /* IconsComponent */] },
    { path: 'maps', component: __WEBPACK_IMPORTED_MODULE_9__maps_maps_component__["a" /* MapsComponent */] },
    { path: 'notifications', component: __WEBPACK_IMPORTED_MODULE_10__notifications_notifications_component__["a" /* NotificationsComponent */] },
    { path: 'upgrade', component: __WEBPACK_IMPORTED_MODULE_11__upgrade_upgrade_component__["a" /* UpgradeComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_12__login_login_component__["a" /* LoginComponent */] },
    { path: 'ProfileInformation', component: __WEBPACK_IMPORTED_MODULE_13__ProfileInformation_ProfileInformation_component__["a" /* ProfileInformationComponent */] },
    { path: 'PatientMasterData', component: __WEBPACK_IMPORTED_MODULE_14__PatientMasterData_PatientMasterData_component__["a" /* PatientMasterDataComponent */] },
    { path: 'Prescription', component: __WEBPACK_IMPORTED_MODULE_15__Prescription_Prescription_component__["a" /* PrescriptionComponent */] },
    { path: 'ConsultationInformation', component: __WEBPACK_IMPORTED_MODULE_16__ConsultationInformation_ConsultationInformation_component__["a" /* ConsultationInformationComponent */] },
    { path: 'InsuranceData', component: __WEBPACK_IMPORTED_MODULE_17__InsuranceData_InsuranceData_component__["a" /* InsuranceDataComponent */] },
    { path: 'ImmunizationRecord', component: __WEBPACK_IMPORTED_MODULE_18__ImmunizationRecord_ImmunizationRecord_component__["a" /* ImmunizationRecordComponent */] },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* RouterModule */].forRoot(routes)
            ],
            exports: [],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/components.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__footer_footer_component__ = __webpack_require__("./src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__navbar_navbar_component__ = __webpack_require__("./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sidebar_sidebar_component__ = __webpack_require__("./src/app/components/sidebar/sidebar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* RouterModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_4__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_5__sidebar_sidebar_component__["b" /* SidebarComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_4__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_5__sidebar_sidebar_component__["b" /* SidebarComponent */]
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer \">\n    <div class=\"container-fluid\">\n        <nav class=\"pull-left\">\n            <ul>\n                <li>\n                    <a href=\"https://www.creative-tim.com\">\n                        Creative Tim\n                    </a>\n                </li>\n                <li>\n                    <a href=\"http://presentation.creative-tim.com\">\n                        About Us\n                    </a>\n                </li>\n                <li>\n                    <a href=\"http://blog.creative-tim.com\">\n                        Blog\n                    </a>\n                </li>\n                <li>\n                    <a href=\"https://www.creative-tim.com/license\">\n                        Licenses\n                    </a>\n                </li>\n            </ul>\n        </nav>\n        <div class=\"copyright pull-right\">\n            &copy;\n            {{test | date: 'yyyy'}}, made with love by\n            <a href=\"https://www.creative-tim.com\" target=\"_blank\">Creative Tim</a> for a better web.\n        </div>\n    </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-transparent  navbar-absolute fixed-top\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-wrapper\">\n          <!-- <a class=\"navbar-brand\" href=\"#\">{{getTitle()}}</a> -->\n        </div>\n        <button mat-raised-button class=\"navbar-toggler\" type=\"button\" (click)=\"sidebarToggle()\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\n        </button>\n        <div class=\"collapse navbar-collapse justify-content-end\" id=\"navigation\">\n            <form class=\"navbar-form\">\n                <div class=\"input-group no-border\">\n                    <input type=\"text\" value=\"\" class=\"form-control\" placeholder=\"Search...\">\n                    <button mat-raised-button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\n                        <i class=\"material-icons\">search</i>\n                        <div class=\"ripple-container\"></div>\n                    </button>\n                </div>\n            </form>\n            <ul class=\"navbar-nav\">\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"#pablo\">\n                        <i class=\"material-icons\">dashboard</i>\n                        <p>\n                            <span class=\"d-lg-none d-md-block\">Stats</span>\n                        </p>\n                    </a>\n                </li>\n                <li class=\"nav-item dropdown\">\n                    <a class=\"nav-link\" href=\"http://example.com\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                        <i class=\"material-icons\">notifications</i>\n                        <span class=\"notification\">5</span>\n                        <p>\n                            <span class=\"d-lg-none d-md-block\">Some Actions</span>\n                        </p>\n                    </a>\n                    <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink\">\n                        <a class=\"dropdown-item\" href=\"#\">Mike John responded to your email</a>\n                        <a class=\"dropdown-item\" href=\"#\">You have 5 new tasks</a>\n                        <a class=\"dropdown-item\" href=\"#\">You're now friend with Andrew</a>\n                        <a class=\"dropdown-item\" href=\"#\">Another Notification</a>\n                        <a class=\"dropdown-item\" href=\"#\">Another One</a>\n                    </div>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"#pablo\">\n                        <i class=\"material-icons\">person</i>\n                        <p>\n                            <span class=\"d-lg-none d-md-block\">Account</span>\n                        </p>\n                    </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav>\n\n<!--\n\n<nav class=\"navbar navbar-transparent navbar-absolute\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <button mat-raised-button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" (click)=\"sidebarToggle()\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\" href=\"#\">{{getTitle()}}</a>\n        </div>\n        <div class=\"collapse navbar-collapse\">\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li>\n                    <a href=\"#pablo\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                        <i class=\"material-icons\">dashboard</i>\n                        <p class=\"hidden-lg hidden-md\">Dashboard</p>\n                    </a>\n                </li>\n                <li class=\"dropdown\">\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                        <i class=\"material-icons\">notifications</i>\n                        <span class=\"notification\">5</span>\n                        <p class=\"hidden-lg hidden-md\">Notifications</p>\n                    </a>\n                    <ul class=\"dropdown-menu\">\n                        <li><a href=\"#\">Mike John responded to your email</a></li>\n                        <li><a href=\"#\">You have 5 new tasks</a></li>\n                        <li><a href=\"#\">You're now friend with Andrew</a></li>\n                        <li><a href=\"#\">Another Notification</a></li>\n                        <li><a href=\"#\">Another One</a></li>\n                    </ul>\n                </li>\n                <li>\n                    <a href=\"#pablo\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                       <i class=\"material-icons\">person</i>\n                       <p class=\"hidden-lg hidden-md\">Profile</p>\n                    </a>\n                </li>\n            </ul>\n\n            <form class=\"navbar-form navbar-right\" role=\"search\">\n                <div class=\"form-group form-black is-empty\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n                    <span class=\"material-input\"></span>\n                </div>\n                <button mat-raised-button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\n                    <i class=\"material-icons\">search</i><div class=\"ripple-container\"></div>\n                </button>\n            </form>\n        </div>\n    </div>\n</nav> -->\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sidebar_sidebar_component__ = __webpack_require__("./src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(location, element, router) {
        this.element = element;
        this.router = router;
        this.mobile_menu_visible = 0;
        this.location = location;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.listTitles = __WEBPACK_IMPORTED_MODULE_1__sidebar_sidebar_component__["a" /* ROUTES */].filter(function (listTitle) { return listTitle; });
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
        this.router.events.subscribe(function (event) {
            _this.sidebarClose();
            var $layer = document.getElementsByClassName('close-layer')[0];
            if ($layer) {
                $layer.remove();
                _this.mobile_menu_visible = 0;
            }
        });
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        body.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    ;
    NavbarComponent.prototype.sidebarClose = function () {
        var body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    };
    ;
    NavbarComponent.prototype.sidebarToggle = function () {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        var $toggle = document.getElementsByClassName('navbar-toggler')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
        var body = document.getElementsByTagName('body')[0];
        if (this.mobile_menu_visible == 1) {
            // $('html').removeClass('nav-open');
            body.classList.remove('nav-open');
            if ($layer) {
                $layer.remove();
            }
            setTimeout(function () {
                $toggle.classList.remove('toggled');
            }, 400);
            this.mobile_menu_visible = 0;
        }
        else {
            setTimeout(function () {
                $toggle.classList.add('toggled');
            }, 430);
            var $layer = document.createElement('div');
            $layer.setAttribute('class', 'close-layer');
            if (body.querySelectorAll('.main-panel')) {
                document.getElementsByClassName('main-panel')[0].appendChild($layer);
            }
            else if (body.classList.contains('off-canvas-sidebar')) {
                document.getElementsByClassName('wrapper-full-page')[0].appendChild($layer);
            }
            setTimeout(function () {
                $layer.classList.add('visible');
            }, 100);
            $layer.onclick = function () {
                body.classList.remove('nav-open');
                this.mobile_menu_visible = 0;
                $layer.classList.remove('visible');
                setTimeout(function () {
                    $layer.remove();
                    $toggle.classList.remove('toggled');
                }, 400);
            }.bind(this);
            body.classList.add('nav-open');
            this.mobile_menu_visible = 1;
        }
    };
    ;
    NavbarComponent.prototype.getTitle = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(2);
        }
        titlee = titlee.split('/').pop();
        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return 'Dashboard';
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"logo\">\n    <a href=\"https://www.creative-tim.com\" class=\"simple-text\">\n        <div class=\"logo-img\">\n            <img src=\"/assets/img/angular2-logo-red.png\"/>\n        </div>\n        Creative Tim\n    </a>\n</div>\n<div class=\"sidebar-wrapper\">\n  <div *ngIf=\"isMobileMenu()\">\n    <form class=\"navbar-form\">\n      <span class=\"bmd-form-group\">\n        <div class=\"input-group no-border\">\n          <input type=\"text\" value=\"\" class=\"form-control\" placeholder=\"Search...\">\n          <button mat-raised-button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\n            <i class=\"material-icons\">search</i>\n            <div class=\"ripple-container\"></div>\n          </button>\n        </div>\n      </span>\n    </form>\n    <ul class=\"nav navbar-nav nav-mobile-menu\">\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#pablo\">\n                <i class=\"material-icons\">dashboard</i>\n                <p>\n                    <span class=\"d-lg-none d-md-block\">Stats</span>\n                </p>\n            </a>\n        </li>\n        <li class=\"nav-item dropdown\">\n            <a class=\"nav-link\" href=\"http://example.com\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                <i class=\"material-icons\">notifications</i>\n                <span class=\"notification\">5</span>\n                <p>\n                    <span class=\"d-lg-none d-md-block\">Some Actions</span>\n                </p>\n            </a>\n            <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink\">\n                <a class=\"dropdown-item\" href=\"#\">Mike John responded to your email</a>\n                <a class=\"dropdown-item\" href=\"#\">You have 5 new tasks</a>\n                <a class=\"dropdown-item\" href=\"#\">You're now friend with Andrew</a>\n                <a class=\"dropdown-item\" href=\"#\">Another Notification</a>\n                <a class=\"dropdown-item\" href=\"#\">Another One</a>\n            </div>\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#pablo\">\n                <i class=\"material-icons\">person</i>\n                <p>\n                    <span class=\"d-lg-none d-md-block\">Account</span>\n                </p>\n            </a>\n        </li>\n    </ul>\n  </div>\n    <ul class=\"nav\">\n        <li routerLinkActive=\"active\" *ngFor=\"let menuItem of menuItems\" class=\"{{menuItem.class}} nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"[menuItem.path]\">\n                <i class=\"material-icons\">{{menuItem.icon}}</i>\n                <p>{{menuItem.title}}</p>\n            </a>\n        </li>\n    </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ROUTES = [
    { path: 'dashboard', title: 'Dashboard', icon: 'dashboard', class: '' },
    { path: 'table-list', title: 'Medical Record', icon: 'content_paste', class: '' },
    { path: 'user-profile', title: 'My Profile', icon: 'person', class: '' },
    { path: 'ProfileInformation', title: "Profile Information", icon: 'content_paste', class: '' },
    { path: 'PatientMasterData', title: "Patient Master", icon: 'content_paste', class: '' },
    { path: 'Prescription', title: "Prescription", icon: 'content_paste', class: '' },
    { path: 'ConsultationInformation', title: "Consultation Information", icon: 'content_paste', class: '' },
    { path: 'InsuranceData', title: "Insurance Data", icon: 'content_paste', class: '' },
    { path: 'ImmunizationRecord', title: "Immunization Record", icon: 'content_paste', class: '' },
    // { path: 'typography', title: 'Typography',  icon:'library_books', class: '' },
    // { path: 'icons', title: 'Icons',  icon:'bubble_chart', class: '' },
    // { path: 'maps', title: 'Maps',  icon:'location_on', class: '' },
    // { path: 'notifications', title: 'Notifications',  icon:'notifications', class: '' },
    { path: 'upgrade', title: 'Upgrade to PRO', icon: 'unarchive', class: 'active-pro' },
];
var SidebarComponent = (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.menuItems = ROUTES.filter(function (menuItem) { return menuItem; });
    };
    SidebarComponent.prototype.isMobileMenu = function () {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
    ;
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sidebar',
            template: __webpack_require__("./src/app/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__("./src/app/components/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/configuration.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Configuration; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Configuration = (function () {
    function Configuration() {
        this.ApiIP = "http://localhost";
        this.ApiPort = "3001";
        this.Server = this.ApiIP + ":" + this.ApiPort;
        this.ApiUrl = "/api/";
        this.ServerWithApiUrl = this.Server + this.ApiUrl;
    }
    Configuration = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    ], Configuration);
    return Configuration;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"container-fluid\">\n      <div class=\"row\">\n          <div class=\"col-lg-3 col-md-6 col-sm-6\">\n              <div class=\"card card-stats\">\n                  <div class=\"card-header card-header-warning card-header-icon\">\n                      <div class=\"card-icon\">\n                          <i class=\"material-icons\">content_copy</i>\n                      </div>\n                      <p class=\"card-category\">Used Space</p>\n                      <h3 class=\"card-title\">49/50\n                          <small>MB</small>\n                      </h3>\n                  </div>\n                  <div class=\"card-footer\">\n                      <div class=\"stats\">\n                          <i class=\"material-icons text-danger\">warning</i>\n                          <a href=\"#pablo\">Get More Space...</a>\n                      </div>\n                  </div>\n              </div>\n          </div>\n          <div class=\"col-lg-3 col-md-6 col-sm-6\">\n              <div class=\"card card-stats\">\n                  <div class=\"card-header card-header-success card-header-icon\">\n                      <div class=\"card-icon\">\n                          <i class=\"material-icons\">store</i>\n                      </div>\n                      <p class=\"card-category\">Revenue</p>\n                      <h3 class=\"card-title\">$34,245</h3>\n                  </div>\n                  <div class=\"card-footer\">\n                      <div class=\"stats\">\n                          <i class=\"material-icons\">date_range</i> Last 24 Hours\n                      </div>\n                  </div>\n              </div>\n          </div>\n          <div class=\"col-lg-3 col-md-6 col-sm-6\">\n              <div class=\"card card-stats\">\n                  <div class=\"card-header card-header-danger card-header-icon\">\n                      <div class=\"card-icon\">\n                          <i class=\"material-icons\">info_outline</i>\n                      </div>\n                      <p class=\"card-category\">Fixed Issues</p>\n                      <h3 class=\"card-title\">75</h3>\n                  </div>\n                  <div class=\"card-footer\">\n                      <div class=\"stats\">\n                          <i class=\"material-icons\">local_offer</i> Tracked from Github\n                      </div>\n                  </div>\n              </div>\n          </div>\n          <div class=\"col-lg-3 col-md-6 col-sm-6\">\n              <div class=\"card card-stats\">\n                  <div class=\"card-header card-header-info card-header-icon\">\n                      <div class=\"card-icon\">\n                          <i class=\"fa fa-twitter\"></i>\n                      </div>\n                      <p class=\"card-category\">Followers</p>\n                      <h3 class=\"card-title\">+245</h3>\n                  </div>\n                  <div class=\"card-footer\">\n                      <div class=\"stats\">\n                          <i class=\"material-icons\">update</i> Just Updated\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n      <div class=\"row\">\n          <div class=\"col-md-4\">\n              <div class=\"card card-chart\">\n                  <div class=\"card-header card-header-success\">\n                      <div class=\"ct-chart\" id=\"dailySalesChart\"></div>\n                  </div>\n                  <div class=\"card-body\">\n                      <h4 class=\"card-title\">Daily Sales</h4>\n                      <p class=\"card-category\">\n                          <span class=\"text-success\"><i class=\"fa fa-long-arrow-up\"></i> 55% </span> increase in today sales.</p>\n                  </div>\n                  <div class=\"card-footer\">\n                      <div class=\"stats\">\n                          <i class=\"material-icons\">access_time</i> updated 4 minutes ago\n                      </div>\n                  </div>\n              </div>\n          </div>\n          <div class=\"col-md-4\">\n              <div class=\"card card-chart\">\n                  <div class=\"card-header card-header-warning\">\n                      <div class=\"ct-chart\" id=\"websiteViewsChart\"></div>\n                  </div>\n                  <div class=\"card-body\">\n                      <h4 class=\"card-title\">Email Subscriptions</h4>\n                      <p class=\"card-category\">Last Campaign Performance</p>\n                  </div>\n                  <div class=\"card-footer\">\n                      <div class=\"stats\">\n                          <i class=\"material-icons\">access_time</i> campaign sent 2 days ago\n                      </div>\n                  </div>\n              </div>\n          </div>\n          <div class=\"col-md-4\">\n              <div class=\"card card-chart\">\n                  <div class=\"card-header card-header-danger\">\n                      <div class=\"ct-chart\" id=\"completedTasksChart\"></div>\n                  </div>\n                  <div class=\"card-body\">\n                      <h4 class=\"card-title\">Completed Tasks</h4>\n                      <p class=\"card-category\">Last Campaign Performance</p>\n                  </div>\n                  <div class=\"card-footer\">\n                      <div class=\"stats\">\n                          <i class=\"material-icons\">access_time</i> campaign sent 2 days ago\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n      <div class=\"row\">\n          <div class=\"col-lg-6 col-md-12\">\n              <div class=\"card\">\n                  <div class=\"card-header card-header-tabs card-header-primary\">\n                      <div class=\"nav-tabs-navigation\">\n                          <div class=\"nav-tabs-wrapper\">\n                              <span class=\"nav-tabs-title\">Tasks:</span>\n                              <ul class=\"nav nav-tabs\" data-tabs=\"tabs\">\n                                  <li class=\"nav-item\">\n                                      <a mat-button class=\"nav-link active\" href=\"#profile\" data-toggle=\"tab\">\n                                          <i class=\"material-icons\">bug_report</i> Bugs\n                                          <div class=\"ripple-container\"></div>\n                                      </a>\n                                  </li>\n                                  <li class=\"nav-item\">\n                                      <a mat-button class=\"nav-link\" href=\"#messages\" data-toggle=\"tab\">\n                                          <i class=\"material-icons\">code</i> Website\n                                          <div class=\"ripple-container\"></div>\n                                      </a>\n                                  </li>\n                                  <li class=\"nav-item\">\n                                      <a mat-button class=\"nav-link\" href=\"#settings\" data-toggle=\"tab\">\n                                          <i class=\"material-icons\">cloud</i> Server\n                                          <div class=\"ripple-container\"></div>\n                                      </a>\n                                  </li>\n                              </ul>\n                          </div>\n                      </div>\n                  </div>\n                  <div class=\"card-body\">\n                      <div class=\"tab-content\">\n                          <div class=\"tab-pane active\" id=\"profile\">\n                              <table class=\"table\">\n                                  <tbody>\n                                      <tr>\n                                          <td>\n                                              <div class=\"form-check\">\n                                                  <label class=\"form-check-label\">\n                                                      <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked>\n                                                      <span class=\"form-check-sign\">\n                                                          <span class=\"check\"></span>\n                                                      </span>\n                                                  </label>\n                                              </div>\n                                          </td>\n                                          <td>Sign contract for \"What are conference organizers afraid of?\"</td>\n                                          <td class=\"td-actions text-right\">\n                                              <button mat-raised-button type=\"button\" matTooltip=\"Edit Task\" [matTooltipPosition]=\"'above'\" class=\"btn btn-primary btn-link btn-sm btn-just-icon\">\n                                                  <i class=\"material-icons\">edit</i>\n                                              </button>\n                                              <button mat-raised-button type=\"button\" matTooltip=\"Remove\" [matTooltipPosition]=\"'above'\" class=\"btn btn-danger btn-link btn-sm btn-just-icon\">\n                                                  <i class=\"material-icons\">close</i>\n                                              </button>\n                                          </td>\n                                      </tr>\n                                      <tr>\n                                          <td>\n                                              <div class=\"form-check\">\n                                                  <label class=\"form-check-label\">\n                                                      <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\n                                                      <span class=\"form-check-sign\">\n                                                          <span class=\"check\"></span>\n                                                      </span>\n                                                  </label>\n                                              </div>\n                                          </td>\n                                          <td>Lines From Great Russian Literature? Or E-mails From My Boss?</td>\n                                          <td class=\"td-actions text-right\">\n                                              <button mat-raised-button type=\"button\" matTooltip=\"Edit Task\" [matTooltipPosition]=\"'above'\" class=\"btn btn-primary btn-link btn-sm btn-just-icon\">\n                                                  <i class=\"material-icons\">edit</i>\n                                              </button>\n                                              <button mat-raised-button type=\"button\" matTooltip=\"Remove\" [matTooltipPosition]=\"'above'\" class=\"btn btn-danger btn-link btn-sm btn-just-icon\">\n                                                  <i class=\"material-icons\">close</i>\n                                              </button>\n                                          </td>\n                                      </tr>\n                                      <tr>\n                                          <td>\n                                              <div class=\"form-check\">\n                                                  <label class=\"form-check-label\">\n                                                      <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\n                                                      <span class=\"form-check-sign\">\n                                                          <span class=\"check\"></span>\n                                                      </span>\n                                                  </label>\n                                              </div>\n                                          </td>\n                                          <td>Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit\n                                          </td>\n                                          <td class=\"td-actions text-right\">\n                                              <button mat-raised-button type=\"button\" matTooltip=\"Edit Task\" [matTooltipPosition]=\"'above'\" class=\"btn btn-primary btn-link btn-sm btn-just-icon\">\n                                                  <i class=\"material-icons\">edit</i>\n                                              </button>\n                                              <button mat-raised-button type=\"button\" matTooltip=\"Remove\" [matTooltipPosition]=\"'above'\" class=\"btn btn-danger btn-link btn-sm btn-just-icon\">\n                                                  <i class=\"material-icons\">close</i>\n                                              </button>\n                                          </td>\n                                      </tr>\n                                      <tr>\n                                          <td>\n                                              <div class=\"form-check\">\n                                                  <label class=\"form-check-label\">\n                                                      <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked>\n                                                      <span class=\"form-check-sign\">\n                                                          <span class=\"check\"></span>\n                                                      </span>\n                                                  </label>\n                                              </div>\n                                          </td>\n                                          <td>Create 4 Invisible User Experiences you Never Knew About</td>\n                                          <td class=\"td-actions text-right\">\n                                              <button mat-raised-button type=\"button\" matTooltip=\"Edit Task\" [matTooltipPosition]=\"'above'\" class=\"btn btn-primary btn-link btn-sm btn-just-icon\">\n                                                  <i class=\"material-icons\">edit</i>\n                                              </button>\n                                              <button mat-raised-button type=\"button\" matTooltip=\"Remove\" [matTooltipPosition]=\"'above'\" class=\"btn btn-danger btn-link btn-sm btn-just-icon\">\n                                                  <i class=\"material-icons\">close</i>\n                                              </button>\n                                          </td>\n                                      </tr>\n                                  </tbody>\n                              </table>\n                          </div>\n                          <div class=\"tab-pane\" id=\"messages\">\n                              <table class=\"table\">\n                                  <tbody>\n                                      <tr>\n                                          <td>\n                                              <div class=\"form-check\">\n                                                  <label class=\"form-check-label\">\n                                                      <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked>\n                                                      <span class=\"form-check-sign\">\n                                                          <span class=\"check\"></span>\n                                                      </span>\n                                                  </label>\n                                              </div>\n                                          </td>\n                                          <td>Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit\n                                          </td>\n                                          <td class=\"td-actions text-right\">\n                                              <button mat-raised-button type=\"button\" matTooltip=\"Edit Task\" [matTooltipPosition]=\"'above'\" class=\"btn btn-primary btn-link btn-sm btn-just-icon\">\n                                                  <i class=\"material-icons\">edit</i>\n                                              </button>\n                                              <button mat-raised-button type=\"button\" matTooltip=\"Remove\" [matTooltipPosition]=\"'above'\" class=\"btn btn-danger btn-link btn-sm btn-just-icon\">\n                                                  <i class=\"material-icons\">close</i>\n                                              </button>\n                                          </td>\n                                      </tr>\n                                      <tr>\n                                          <td>\n                                              <div class=\"form-check\">\n                                                  <label class=\"form-check-label\">\n                                                      <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\n                                                      <span class=\"form-check-sign\">\n                                                          <span class=\"check\"></span>\n                                                      </span>\n                                                  </label>\n                                              </div>\n                                          </td>\n                                          <td>Sign contract for \"What are conference organizers afraid of?\"</td>\n                                          <td class=\"td-actions text-right\">\n                                              <button mat-raised-button type=\"button\" matTooltip=\"Edit Task\" [matTooltipPosition]=\"'above'\" class=\"btn btn-primary btn-link btn-sm btn-just-icon\">\n                                                  <i class=\"material-icons\">edit</i>\n                                              </button>\n                                              <button mat-raised-button type=\"button\" matTooltip=\"Remove\" [matTooltipPosition]=\"'above'\" class=\"btn btn-danger btn-link btn-sm btn-just-icon\">\n                                                  <i class=\"material-icons\">close</i>\n                                              </button>\n                                          </td>\n                                      </tr>\n                                  </tbody>\n                              </table>\n                          </div>\n                          <div class=\"tab-pane\" id=\"settings\">\n                              <table class=\"table\">\n                                  <tbody>\n                                      <tr>\n                                          <td>\n                                              <div class=\"form-check\">\n                                                  <label class=\"form-check-label\">\n                                                      <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\n                                                      <span class=\"form-check-sign\">\n                                                          <span class=\"check\"></span>\n                                                      </span>\n                                                  </label>\n                                              </div>\n                                          </td>\n                                          <td>Lines From Great Russian Literature? Or E-mails From My Boss?</td>\n                                          <td class=\"td-actions text-right\">\n                                              <button mat-raised-button type=\"button\" matTooltip=\"Edit Task\" [matTooltipPosition]=\"'above'\" class=\"btn btn-primary btn-link btn-sm btn-just-icon\">\n                                                  <i class=\"material-icons\">edit</i>\n                                              </button>\n                                              <button mat-raised-button type=\"button\" matTooltip=\"Remove\" [matTooltipPosition]=\"'above'\" class=\"btn btn-danger btn-link btn-sm btn-just-icon\">\n                                                  <i class=\"material-icons\">close</i>\n                                              </button>\n                                          </td>\n                                      </tr>\n                                      <tr>\n                                          <td>\n                                              <div class=\"form-check\">\n                                                  <label class=\"form-check-label\">\n                                                      <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked>\n                                                      <span class=\"form-check-sign\">\n                                                          <span class=\"check\"></span>\n                                                      </span>\n                                                  </label>\n                                              </div>\n                                          </td>\n                                          <td>Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit\n                                          </td>\n                                          <td class=\"td-actions text-right\">\n                                              <button mat-raised-button type=\"button\" matTooltip=\"Edit Task\" [matTooltipPosition]=\"'above'\" class=\"btn btn-primary btn-link btn-sm btn-just-icon\">\n                                                  <i class=\"material-icons\">edit</i>\n                                              </button>\n                                              <button mat-raised-button type=\"button\" matTooltip=\"Remove\" [matTooltipPosition]=\"'above'\" class=\"btn btn-danger btn-link btn-sm btn-just-icon\">\n                                                  <i class=\"material-icons\">close</i>\n                                              </button>\n                                          </td>\n                                      </tr>\n                                      <tr>\n                                          <td>\n                                              <div class=\"form-check\">\n                                                  <label class=\"form-check-label\">\n                                                      <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked>\n                                                      <span class=\"form-check-sign\">\n                                                          <span class=\"check\"></span>\n                                                      </span>\n                                                  </label>\n                                              </div>\n                                          </td>\n                                          <td>Sign contract for \"What are conference organizers afraid of?\"</td>\n                                          <td class=\"td-actions text-right\">\n                                              <button mat-raised-button type=\"button\" matTooltip=\"Edit Task\" [matTooltipPosition]=\"'above'\" class=\"btn btn-primary btn-link btn-sm btn-just-icon\">\n                                                  <i class=\"material-icons\">edit</i>\n                                              </button>\n                                              <button mat-raised-button type=\"button\" matTooltip=\"Remove\" [matTooltipPosition]=\"'above'\" class=\"btn btn-danger btn-link btn-sm btn-just-icon\">\n                                                  <i class=\"material-icons\">close</i>\n                                              </button>\n                                          </td>\n                                      </tr>\n                                  </tbody>\n                              </table>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n          </div>\n          <div class=\"col-lg-6 col-md-12\">\n              <div class=\"card\">\n                  <div class=\"card-header card-header-warning\">\n                      <h4 class=\"card-title\">Employees Stats</h4>\n                      <p class=\"card-category\">New employees on 15th September, 2016</p>\n                  </div>\n                  <div class=\"card-body table-responsive\">\n                      <table class=\"table table-hover\">\n                          <thead class=\"text-warning\">\n                              <th>ID</th>\n                              <th>Name</th>\n                              <th>Salary</th>\n                              <th>Country</th>\n                          </thead>\n                          <tbody>\n                              <tr>\n                                  <td>1</td>\n                                  <td>Dakota Rice</td>\n                                  <td>$36,738</td>\n                                  <td>Niger</td>\n                              </tr>\n                              <tr>\n                                  <td>2</td>\n                                  <td>Minerva Hooper</td>\n                                  <td>$23,789</td>\n                                  <td>Curaçao</td>\n                              </tr>\n                              <tr>\n                                  <td>3</td>\n                                  <td>Sage Rodriguez</td>\n                                  <td>$56,142</td>\n                                  <td>Netherlands</td>\n                              </tr>\n                              <tr>\n                                  <td>4</td>\n                                  <td>Philip Chaney</td>\n                                  <td>$38,735</td>\n                                  <td>Korea, South</td>\n                              </tr>\n                          </tbody>\n                      </table>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chartist__ = __webpack_require__("./node_modules/chartist/dist/chartist.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chartist___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_chartist__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.startAnimationForLineChart = function (chart) {
        var seq, delays, durations;
        seq = 0;
        delays = 80;
        durations = 500;
        chart.on('draw', function (data) {
            if (data.type === 'line' || data.type === 'area') {
                data.element.animate({
                    d: {
                        begin: 600,
                        dur: 700,
                        from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
                        to: data.path.clone().stringify(),
                        easing: __WEBPACK_IMPORTED_MODULE_1_chartist__["Svg"].Easing.easeOutQuint
                    }
                });
            }
            else if (data.type === 'point') {
                seq++;
                data.element.animate({
                    opacity: {
                        begin: seq * delays,
                        dur: durations,
                        from: 0,
                        to: 1,
                        easing: 'ease'
                    }
                });
            }
        });
        seq = 0;
    };
    ;
    DashboardComponent.prototype.startAnimationForBarChart = function (chart) {
        var seq2, delays2, durations2;
        seq2 = 0;
        delays2 = 80;
        durations2 = 500;
        chart.on('draw', function (data) {
            if (data.type === 'bar') {
                seq2++;
                data.element.animate({
                    opacity: {
                        begin: seq2 * delays2,
                        dur: durations2,
                        from: 0,
                        to: 1,
                        easing: 'ease'
                    }
                });
            }
        });
        seq2 = 0;
    };
    ;
    DashboardComponent.prototype.ngOnInit = function () {
        /* ----------==========     Daily Sales Chart initialization For Documentation    ==========---------- */
        var dataDailySalesChart = {
            labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
            series: [
                [12, 17, 7, 17, 23, 18, 38]
            ]
        };
        var optionsDailySalesChart = {
            lineSmooth: __WEBPACK_IMPORTED_MODULE_1_chartist__["Interpolation"].cardinal({
                tension: 0
            }),
            low: 0,
            high: 50,
            chartPadding: { top: 0, right: 0, bottom: 0, left: 0 },
        };
        var dailySalesChart = new __WEBPACK_IMPORTED_MODULE_1_chartist__["Line"]('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);
        this.startAnimationForLineChart(dailySalesChart);
        /* ----------==========     Completed Tasks Chart initialization    ==========---------- */
        var dataCompletedTasksChart = {
            labels: ['12p', '3p', '6p', '9p', '12p', '3a', '6a', '9a'],
            series: [
                [230, 750, 450, 300, 280, 240, 200, 190]
            ]
        };
        var optionsCompletedTasksChart = {
            lineSmooth: __WEBPACK_IMPORTED_MODULE_1_chartist__["Interpolation"].cardinal({
                tension: 0
            }),
            low: 0,
            high: 1000,
            chartPadding: { top: 0, right: 0, bottom: 0, left: 0 }
        };
        var completedTasksChart = new __WEBPACK_IMPORTED_MODULE_1_chartist__["Line"]('#completedTasksChart', dataCompletedTasksChart, optionsCompletedTasksChart);
        // start animation for the Completed Tasks Chart - Line Chart
        this.startAnimationForLineChart(completedTasksChart);
        /* ----------==========     Emails Subscription Chart initialization    ==========---------- */
        var datawebsiteViewsChart = {
            labels: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
            series: [
                [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]
            ]
        };
        var optionswebsiteViewsChart = {
            axisX: {
                showGrid: false
            },
            low: 0,
            high: 1000,
            chartPadding: { top: 0, right: 5, bottom: 0, left: 0 }
        };
        var responsiveOptions = [
            ['screen and (max-width: 640px)', {
                    seriesBarDistance: 5,
                    axisX: {
                        labelInterpolationFnc: function (value) {
                            return value[0];
                        }
                    }
                }]
        ];
        var websiteViewsChart = new __WEBPACK_IMPORTED_MODULE_1_chartist__["Bar"]('#websiteViewsChart', datawebsiteViewsChart, optionswebsiteViewsChart, responsiveOptions);
        //start animation for the Emails Subscription Chart
        this.startAnimationForBarChart(websiteViewsChart);
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__configuration__ = __webpack_require__("./src/app/configuration.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DataService = (function () {
    function DataService(http, _configuration) {
        this.http = http;
        this._configuration = _configuration;
        this.resolveSuffix = '?resolve=true';
        this.actionUrl = _configuration.ServerWithApiUrl;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }
    DataService.prototype.getAll = function (ns) {
        console.log('GetAll ' + ns + ' to ' + this.actionUrl + ns);
        return this.http.get("" + this.actionUrl + ns)
            .map(this.extractData)
            .catch(this.handleError);
    };
    DataService.prototype.getSingle = function (ns, id) {
        console.log('GetSingle ' + ns);
        return this.http.get(this.actionUrl + ns + '/' + id + this.resolveSuffix)
            .map(this.extractData)
            .catch(this.handleError);
    };
    DataService.prototype.add = function (ns, asset) {
        console.log('Entered DataService add');
        console.log('Add ' + ns);
        console.log('asset', asset);
        return this.http.post(this.actionUrl + ns, asset)
            .map(this.extractData)
            .catch(this.handleError);
    };
    DataService.prototype.update = function (ns, id, itemToUpdate) {
        console.log('Update ' + ns);
        console.log('what is the id?', id);
        console.log('what is the updated item?', itemToUpdate);
        console.log('what is the updated item?', JSON.stringify(itemToUpdate));
        return this.http.put("" + this.actionUrl + ns + "/" + id, itemToUpdate)
            .map(this.extractData)
            .catch(this.handleError);
    };
    DataService.prototype.delete = function (ns, id) {
        console.log('Delete ' + ns);
        return this.http.delete(this.actionUrl + ns + '/' + id)
            .map(this.extractData)
            .catch(this.handleError);
    };
    DataService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(errMsg);
    };
    DataService.prototype.extractData = function (res) {
        return res.json();
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_5__configuration__["a" /* Configuration */]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/icons/icons.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/icons/icons.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"main-content\">\n  <div class=\"container-fluid\">\n      <div class=\"card card-plain\">\n          <div class=\"card-header card-header-danger\">\n              <h4 class=\"card-title\">Material Design Icons</h4>\n              <p class=\"card-category\">Handcrafted by our friends from\n                  <a target=\"_blank\" href=\"https://design.google.com/icons/\">Google</a>\n              </p>\n          </div>\n          <div class=\"row\">\n              <div class=\"col-md-12\">\n                  <div class=\"card-body\">\n                      <div class=\"iframe-container d-none d-lg-block\">\n                          <iframe src=\"https://design.google.com/icons/\">\n                              <p>Your browser does not support iframes.</p>\n                          </iframe>\n                      </div>\n                      <div class=\"col-md-12 d-none d-sm-block d-md-block d-lg-none d-block d-sm-none text-center ml-auto mr-auto\">\n                          <h5>The icons are visible on Desktop mode inside an iframe. Since the iframe is not working on Mobile and Tablets please visit the icons on their original page on Google. Check the\n                              <a href=\"https://design.google.com/icons/\" target=\"_blank\">Material Icons</a>\n                          </h5>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/icons/icons.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IconsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IconsComponent = (function () {
    function IconsComponent() {
    }
    IconsComponent.prototype.ngOnInit = function () {
    };
    IconsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-icons',
            template: __webpack_require__("./src/app/icons/icons.component.html"),
            styles: [__webpack_require__("./src/app/icons/icons.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], IconsComponent);
    return IconsComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"container-fluid\">\n      <div class=\"row\">\n          <div class=\"col-md-8\">\n              <div class=\"card\">\n                  <div class=\"card-header card-header-danger\">\n                      <h4 class=\"card-title\">SIGNIN</h4>\n                      <p class=\"card-category\">Sign in to get started</p>\n                  </div>\n                  <div class=\"card-body\">\n                      <form>\n                          <div class=\"row\">\n                              <div class=\"col-md-6\">\n                                <mat-form-field class=\"example-full-width\">\n                              <input matInput placeholder=\"Email address\" type=\"email\">\n                                </mat-form-field>\n                              </div>\n                             \n                          </div>\n                          <div class=\"row\">\n                            <div class=\"col-md-6\">\n                                <mat-form-field class=\"example-full-width\">\n                                  <input matInput placeholder=\"Password\" type=\"password\">\n                                </mat-form-field>\n                              </div>\n                          </div>\n                   \n                          <button mat-raised-button type=\"submit\" class=\"btn btn-danger pull-right\">Update Profile</button>\n                          <div class=\"clearfix\"></div>\n                      </form>\n                  </div>\n              </div>\n          </div>\n          <div class=\"col-md-4\">\n              <div class=\"card card-profile\">\n                  <div class=\"card-body\">\n                      <h6 class=\"card-category text-gray\">MEDICHAIN APP</h6>\n                      <p class=\"card-description\">\n                          Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...\n                      </p>\n                     \n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/maps/maps.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/maps/maps.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"map\"></div>\n"

/***/ }),

/***/ "./src/app/maps/maps.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MapsComponent = (function () {
    function MapsComponent() {
    }
    MapsComponent.prototype.ngOnInit = function () {
        var myLatlng = new google.maps.LatLng(40.748817, -73.985428);
        var mapOptions = {
            zoom: 13,
            center: myLatlng,
            scrollwheel: false,
            styles: [{
                    "featureType": "water",
                    "stylers": [{
                            "saturation": 43
                        }, {
                            "lightness": -11
                        }, {
                            "hue": "#0088ff"
                        }]
                }, {
                    "featureType": "road",
                    "elementType": "geometry.fill",
                    "stylers": [{
                            "hue": "#ff0000"
                        }, {
                            "saturation": -100
                        }, {
                            "lightness": 99
                        }]
                }, {
                    "featureType": "road",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                            "color": "#808080"
                        }, {
                            "lightness": 54
                        }]
                }, {
                    "featureType": "landscape.man_made",
                    "elementType": "geometry.fill",
                    "stylers": [{
                            "color": "#ece2d9"
                        }]
                }, {
                    "featureType": "poi.park",
                    "elementType": "geometry.fill",
                    "stylers": [{
                            "color": "#ccdca1"
                        }]
                }, {
                    "featureType": "road",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                            "color": "#767676"
                        }]
                }, {
                    "featureType": "road",
                    "elementType": "labels.text.stroke",
                    "stylers": [{
                            "color": "#ffffff"
                        }]
                }, {
                    "featureType": "poi",
                    "stylers": [{
                            "visibility": "off"
                        }]
                }, {
                    "featureType": "landscape.natural",
                    "elementType": "geometry.fill",
                    "stylers": [{
                            "visibility": "on"
                        }, {
                            "color": "#b8cb93"
                        }]
                }, {
                    "featureType": "poi.park",
                    "stylers": [{
                            "visibility": "on"
                        }]
                }, {
                    "featureType": "poi.sports_complex",
                    "stylers": [{
                            "visibility": "on"
                        }]
                }, {
                    "featureType": "poi.medical",
                    "stylers": [{
                            "visibility": "on"
                        }]
                }, {
                    "featureType": "poi.business",
                    "stylers": [{
                            "visibility": "simplified"
                        }]
                }]
        };
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
        var marker = new google.maps.Marker({
            position: myLatlng,
            title: "Hello World!"
        });
        // To add the marker to the map, call setMap();
        marker.setMap(map);
    };
    MapsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-maps',
            template: __webpack_require__("./src/app/maps/maps.component.html"),
            styles: [__webpack_require__("./src/app/maps/maps.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MapsComponent);
    return MapsComponent;
}());



/***/ }),

/***/ "./src/app/notifications/notifications.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/notifications/notifications.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"container-fluid\">\n      <div class=\"card\">\n          <div class=\"card-header card-header-danger\">\n              <h3 class=\"card-title\">Notifications</h3>\n              <p class=\"card-category\">Handcrafted by our friend\n                  <a target=\"_blank\" href=\"https://github.com/mouse0270\">Robert McIntosh</a>. Please checkout the\n                  <a href=\"http://bootstrap-notify.remabledesigns.com/\" target=\"_blank\">full documentation.</a>\n              </p>\n          </div>\n          <div class=\"card-body\">\n              <div class=\"row\">\n                  <div class=\"col-md-6\">\n                      <h4 class=\"card-title\">Notifications Style</h4>\n                      <div class=\"alert alert-info\">\n                          <span>This is a plain notification</span>\n                      </div>\n                      <div class=\"alert alert-info\">\n                          <button mat-button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                              <i class=\"material-icons\">close</i>\n                          </button>\n                          <span>This is a notification with close button.</span>\n                      </div>\n                      <div class=\"alert alert-info alert-with-icon\" data-notify=\"container\">\n                          <i class=\"material-icons\" data-notify=\"icon\">add_alert</i>\n                          <button mat-button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                              <i class=\"material-icons\">close</i>\n                          </button>\n                          <span data-notify=\"message\">This is a notification with close button and icon.</span>\n                      </div>\n                      <div class=\"alert alert-info alert-with-icon\" data-notify=\"container\">\n                          <i class=\"material-icons\" data-notify=\"icon\">add_alert</i>\n                          <button mat-button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                              <i class=\"material-icons\">close</i>\n                          </button>\n                          <span data-notify=\"message\">This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style.</span>\n                      </div>\n                  </div>\n                  <div class=\"col-md-6\">\n                      <h4 class=\"card-title\">Notification states</h4>\n                      <div class=\"alert alert-info\">\n                          <button mat-button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                              <i class=\"material-icons\">close</i>\n                          </button>\n                          <span>\n                              <b> Info - </b> This is a regular notification made with \".alert-info\"</span>\n                      </div>\n                      <div class=\"alert alert-success\">\n                          <button mat-button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                              <i class=\"material-icons\">close</i>\n                          </button>\n                          <span>\n                              <b> Success - </b> This is a regular notification made with \".alert-success\"</span>\n                      </div>\n                      <div class=\"alert alert-warning\">\n                          <button mat-button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                              <i class=\"material-icons\">close</i>\n                          </button>\n                          <span>\n                              <b> Warning - </b> This is a regular notification made with \".alert-warning\"</span>\n                      </div>\n                      <div class=\"alert alert-danger\">\n                          <button mat-button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                              <i class=\"material-icons\">close</i>\n                          </button>\n                          <span>\n                              <b> Danger - </b> This is a regular notification made with \".alert-danger\"</span>\n                      </div>\n                      <div class=\"alert alert-primary\">\n                          <button mat-button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                              <i class=\"material-icons\">close</i>\n                          </button>\n                          <span>\n                              <b> Primary - </b> This is a regular notification made with \".alert-primary\"</span>\n                      </div>\n                  </div>\n              </div>\n          </div>\n          <div class=\"col-md-12\">\n              <div class=\"places-buttons\">\n                  <div class=\"row\">\n                      <div class=\"col-md-6 ml-auto mr-auto text-center\">\n                          <h4 class=\"card-title\">\n                              Notifications Places\n                              <p class=\"category\">Click to view notifications</p>\n                          </h4>\n                      </div>\n                  </div>\n                  <div class=\"row\">\n                      <div class=\"col-lg-8 col-md-10 ml-auto mr-auto\">\n                          <div class=\"row\">\n                              <div class=\"col-md-4\">\n                                  <button mat-raised-button class=\"btn btn-danger btn-block\" (click)=\"showNotification('top','left')\">Top Left</button>\n                              </div>\n                              <div class=\"col-md-4\">\n                                  <button mat-raised-button class=\"btn btn-danger btn-block\" (click)=\"showNotification('top','center')\">Top Center</button>\n                              </div>\n                              <div class=\"col-md-4\">\n                                  <button mat-raised-button class=\"btn btn-danger btn-block\" (click)=\"showNotification('top','right')\">Top Right</button>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n                  <div class=\"row\">\n                      <div class=\"col-lg-8 col-md-10 ml-auto mr-auto\">\n                          <div class=\"row\">\n                              <div class=\"col-md-4\">\n                                  <button mat-raised-button class=\"btn btn-danger btn-block\" (click)=\"showNotification('bottom','left')\">Bottom Left</button>\n                              </div>\n                              <div class=\"col-md-4\">\n                                  <button mat-raised-button class=\"btn btn-danger btn-block\" (click)=\"showNotification('bottom','center')\">Bottom Center</button>\n                              </div>\n                              <div class=\"col-md-4\">\n                                  <button mat-raised-button class=\"btn btn-danger btn-block\" (click)=\"showNotification('bottom','right')\">Bottom Right</button>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/notifications/notifications.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotificationsComponent = (function () {
    function NotificationsComponent() {
    }
    NotificationsComponent.prototype.showNotification = function (from, align) {
        var type = ['', 'info', 'success', 'warning', 'danger'];
        var color = Math.floor((Math.random() * 4) + 1);
        $.notify({
            icon: "notifications",
            message: "Welcome to <b>Material Dashboard</b> - a beautiful freebie for every web developer."
        }, {
            type: type[color],
            timer: 4000,
            placement: {
                from: from,
                align: align
            },
            template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
                '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
                '<i class="material-icons" data-notify="icon">notifications</i> ' +
                '<span data-notify="title">{1}</span> ' +
                '<span data-notify="message">{2}</span>' +
                '<div class="progress" data-notify="progressbar">' +
                '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
                '</div>' +
                '<a href="{3}" target="{4}" data-notify="url"></a>' +
                '</div>'
        });
    };
    NotificationsComponent.prototype.ngOnInit = function () {
    };
    NotificationsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-notifications',
            template: __webpack_require__("./src/app/notifications/notifications.component.html"),
            styles: [__webpack_require__("./src/app/notifications/notifications.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotificationsComponent);
    return NotificationsComponent;
}());



/***/ }),

/***/ "./src/app/table-list/table-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/table-list/table-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"container-fluid\">\n      <div class=\"row\">\n          <div class=\"col-md-12\">\n              <div class=\"card\">\n                  <div class=\"card-header card-header-danger\">\n                      <h4 class=\"card-title \">Medical Records</h4>\n                      <p class=\"card-category\"> All available medical record</p>\n                  </div>\n                  <div class=\"card-body\">\n                      <div class=\"table-responsive\">\n                          <table class=\"table\">\n                              <thead class=\" text-primary\">\n                                  <th>\n                                      ID\n                                  </th>\n                                  <th>\n                                      Name\n                                  </th>\n                                  <th>\n                                      Country\n                                  </th>\n                                  <th>\n                                      City\n                                  </th>\n                                  <th>\n                                      Salary\n                                  </th>\n                              </thead>\n                              <tbody>\n                                  <tr>\n                                      <td>\n                                          1\n                                      </td>\n                                      <td>\n                                          Dakota Rice\n                                      </td>\n                                      <td>\n                                          Niger\n                                      </td>\n                                      <td>\n                                          Oud-Turnhout\n                                      </td>\n                                      <td class=\"text-primary\">\n                                          $36,738\n                                      </td>\n                                  </tr>\n                                  <tr>\n                                      <td>\n                                          2\n                                      </td>\n                                      <td>\n                                          Minerva Hooper\n                                      </td>\n                                      <td>\n                                          Curaçao\n                                      </td>\n                                      <td>\n                                          Sinaai-Waas\n                                      </td>\n                                      <td class=\"text-primary\">\n                                          $23,789\n                                      </td>\n                                  </tr>\n                                  <tr>\n                                      <td>\n                                          3\n                                      </td>\n                                      <td>\n                                          Sage Rodriguez\n                                      </td>\n                                      <td>\n                                          Netherlands\n                                      </td>\n                                      <td>\n                                          Baileux\n                                      </td>\n                                      <td class=\"text-primary\">\n                                          $56,142\n                                      </td>\n                                  </tr>\n                                  <tr>\n                                      <td>\n                                          4\n                                      </td>\n                                      <td>\n                                          Philip Chaney\n                                      </td>\n                                      <td>\n                                          Korea, South\n                                      </td>\n                                      <td>\n                                          Overland Park\n                                      </td>\n                                      <td class=\"text-primary\">\n                                          $38,735\n                                      </td>\n                                  </tr>\n                                  <tr>\n                                      <td>\n                                          5\n                                      </td>\n                                      <td>\n                                          Doris Greene\n                                      </td>\n                                      <td>\n                                          Malawi\n                                      </td>\n                                      <td>\n                                          Feldkirchen in Kärnten\n                                      </td>\n                                      <td class=\"text-primary\">\n                                          $63,542\n                                      </td>\n                                  </tr>\n                                  <tr>\n                                      <td>\n                                          6\n                                      </td>\n                                      <td>\n                                          Mason Porter\n                                      </td>\n                                      <td>\n                                          Chile\n                                      </td>\n                                      <td>\n                                          Gloucester\n                                      </td>\n                                      <td class=\"text-primary\">\n                                          $78,615\n                                      </td>\n                                  </tr>\n                              </tbody>\n                          </table>\n                      </div>\n                  </div>\n              </div>\n          </div>\n\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/table-list/table-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TableListComponent = (function () {
    function TableListComponent() {
    }
    TableListComponent.prototype.ngOnInit = function () {
    };
    TableListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-table-list',
            template: __webpack_require__("./src/app/table-list/table-list.component.html"),
            styles: [__webpack_require__("./src/app/table-list/table-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TableListComponent);
    return TableListComponent;
}());



/***/ }),

/***/ "./src/app/typography/typography.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/typography/typography.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"card\">\n        <div class=\"card-header card-header-danger\">\n            <h4 class=\"card-title\">Material Dashboard Heading</h4>\n            <p class=\"card-category\">Created using Roboto Font Family</p>\n        </div>\n        <div class=\"card-body\">\n            <div id=\"typography\">\n                <div class=\"card-title\">\n                    <h2>Typography</h2>\n                </div>\n                <div class=\"row\">\n                    <div class=\"tim-typo\">\n                        <h1>\n                            <span class=\"tim-note\">Header 1</span>The Life of Material Dashboard </h1>\n                    </div>\n                    <div class=\"tim-typo\">\n                        <h2>\n                            <span class=\"tim-note\">Header 2</span>The Life of Material Dashboard</h2>\n                    </div>\n                    <div class=\"tim-typo\">\n                        <h3>\n                            <span class=\"tim-note\">Header 3</span>The Life of Material Dashboard</h3>\n                    </div>\n                    <div class=\"tim-typo\">\n                        <h4>\n                            <span class=\"tim-note\">Header 4</span>The Life of Material Dashboard</h4>\n                    </div>\n                    <div class=\"tim-typo\">\n                        <h5>\n                            <span class=\"tim-note\">Header 5</span>The Life of Material Dashboard</h5>\n                    </div>\n                    <div class=\"tim-typo\">\n                        <h6>\n                            <span class=\"tim-note\">Header 6</span>The Life of Material Dashboard</h6>\n                    </div>\n                    <div class=\"tim-typo\">\n                        <p>\n                            <span class=\"tim-note\">Paragraph</span>\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.</p>\n                    </div>\n                    <div class=\"tim-typo\">\n                        <span class=\"tim-note\">Quote</span>\n                        <blockquote class=\"blockquote\">\n                            <p>\n                                I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.\n                            </p>\n                            <small>\n                                Kanye West, Musician\n                            </small>\n                        </blockquote>\n                    </div>\n                    <div class=\"tim-typo\">\n                        <span class=\"tim-note\">Muted Text</span>\n                        <p class=\"text-muted\">\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...\n                        </p>\n                    </div>\n                    <div class=\"tim-typo\">\n                        <span class=\"tim-note\">Primary Text</span>\n                        <p class=\"text-primary\">\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>\n                    </div>\n                    <div class=\"tim-typo\">\n                        <span class=\"tim-note\">Info Text</span>\n                        <p class=\"text-info\">\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>\n                    </div>\n                    <div class=\"tim-typo\">\n                        <span class=\"tim-note\">Success Text</span>\n                        <p class=\"text-success\">\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>\n                    </div>\n                    <div class=\"tim-typo\">\n                        <span class=\"tim-note\">Warning Text</span>\n                        <p class=\"text-warning\">\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...\n                        </p>\n                    </div>\n                    <div class=\"tim-typo\">\n                        <span class=\"tim-note\">Danger Text</span>\n                        <p class=\"text-danger\">\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>\n                    </div>\n                    <div class=\"tim-typo\">\n                        <h2>\n                            <span class=\"tim-note\">Small Tag</span>\n                            Header with small subtitle\n                            <br>\n                            <small>Use \"small\" tag for the headers</small>\n                        </h2>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/typography/typography.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TypographyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TypographyComponent = (function () {
    function TypographyComponent() {
    }
    TypographyComponent.prototype.ngOnInit = function () {
    };
    TypographyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-typography',
            template: __webpack_require__("./src/app/typography/typography.component.html"),
            styles: [__webpack_require__("./src/app/typography/typography.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TypographyComponent);
    return TypographyComponent;
}());



/***/ }),

/***/ "./src/app/upgrade/upgrade.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/upgrade/upgrade.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-8 ml-auto mr-auto\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-danger\">\n                        <h4 class=\"card-title\">Medical App</h4>\n                        <p class=\"card-category\">Are you looking for more features? Please check our Premium Version of Medical App.</p>\n                    </div>\n                    <div class=\"card-body\">\n                        <div class=\"table-responsive table-upgrade\">\n                            <table class=\"table\">\n                                <thead>\n                                    <tr>\n                                        <th></th>\n                                        <th class=\"text-center\">Free</th>\n                                        <th class=\"text-center\">PRO</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n\n                                    <tr>\n                                        <td>Premium Support</td>\n                                        <td class=\"text-center\"><i class=\"fa fa-times text-danger\"></i></td>\n                                        <td class=\"text-center\"><i class=\"fa fa-check text-success\"></i></td>\n                                    </tr>\n                                    <tr>\n                                        <td></td>\n                                        <td class=\"text-center\">Free</td>\n                                        <td class=\"text-center\">Just $59</td>\n                                    </tr>\n                                    <tr>\n                                        <td class=\"text-center\"></td>\n                                        <td class=\"text-center\">\n                                            <a href=\"#\" class=\"btn btn-round btn-fill btn-default disabled\">Current Version</a>\n                                        </td>\n                                        <td class=\"text-center\">\n                                            <a target=\"_blank\" href=\"https://www.creative-tim.com/product/material-dashboard-pro-angular2?ref=md-free-angular-upgrade-live\" class=\"btn btn-round btn-fill btn-info\">Upgrade to PRO</a>\n                                        </td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/upgrade/upgrade.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpgradeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UpgradeComponent = (function () {
    function UpgradeComponent() {
    }
    UpgradeComponent.prototype.ngOnInit = function () {
    };
    UpgradeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-upgrade',
            template: __webpack_require__("./src/app/upgrade/upgrade.component.html"),
            styles: [__webpack_require__("./src/app/upgrade/upgrade.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UpgradeComponent);
    return UpgradeComponent;
}());



/***/ }),

/***/ "./src/app/user-profile/user-profile.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user-profile/user-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"container-fluid\">\n      <div class=\"row\">\n          <div class=\"col-md-8\">\n              <div class=\"card\">\n                  <div class=\"card-header card-header-danger\">\n                      <h4 class=\"card-title\">Edit Profile</h4>\n                      <p class=\"card-category\">Complete your profile</p>\n                  </div>\n                  <div class=\"card-body\">\n                      <form>\n                          <div class=\"row\">\n                              <div class=\"col-md-5\">\n                                <mat-form-field class=\"example-full-width\">\n                                    <input matInput placeholder=\"Company (disabled)\" disabled>\n                                  </mat-form-field>\n                              </div>\n                              <div class=\"col-md-3\">\n                                  <mat-form-field class=\"example-full-width\">\n                                    <input matInput placeholder=\"Username\">\n                                  </mat-form-field>\n                              </div>\n                              <div class=\"col-md-4\">\n                                  <mat-form-field class=\"example-full-width\">\n                                    <input matInput placeholder=\"Email address\" type=\"email\">\n                                  </mat-form-field>\n                              </div>\n                          </div>\n                          <div class=\"row\">\n                              <div class=\"col-md-6\">\n                                <mat-form-field class=\"example-full-width\">\n                                  <input matInput placeholder=\"Fist Name\" type=\"text\">\n                                </mat-form-field>\n                              </div>\n                              <div class=\"col-md-6\">\n                                <mat-form-field class=\"example-full-width\">\n                                  <input matInput placeholder=\"Last Name\" type=\"text\">\n                                </mat-form-field>\n                              </div>\n                          </div>\n                          <div class=\"row\">\n                              <div class=\"col-md-12\">\n                                <mat-form-field class=\"example-full-width\">\n                                  <input matInput placeholder=\"Adress\" type=\"text\">\n                                </mat-form-field>\n                              </div>\n                          </div>\n                          <div class=\"row\">\n                              <div class=\"col-md-4\">\n                                <mat-form-field class=\"example-full-width\">\n                                  <input matInput placeholder=\"City\" type=\"text\">\n                                </mat-form-field>\n                              </div>\n                              <div class=\"col-md-4\">\n                                <mat-form-field class=\"example-full-width\">\n                                  <input matInput placeholder=\"Country\" type=\"text\">\n                                </mat-form-field>\n                              </div>\n                              <div class=\"col-md-4\">\n                                <mat-form-field class=\"example-full-width\">\n                                  <input matInput placeholder=\"Postal Code\" type=\"text\">\n                                </mat-form-field>\n                              </div>\n                          </div>\n                          <div class=\"row\">\n                              <div class=\"col-md-12\">\n                                <label>About Me</label>\n                                <mat-form-field class=\"example-full-width\">\n                                   <textarea matInput placeholder=\"Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.\"></textarea>\n                                 </mat-form-field>\n                                  <!-- <div class=\"form-group\">\n\n                                      <div class=\"form-group\">\n                                          <label class=\"bmd-label-floating\"> Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.</label>\n                                          <textarea class=\"form-control\" rows=\"5\"></textarea>\n                                      </div>\n                                  </div> -->\n                              </div>\n                          </div>\n                          <button mat-raised-button type=\"submit\" class=\"btn btn-danger pull-right\">Update Profile</button>\n                          <div class=\"clearfix\"></div>\n                      </form>\n                  </div>\n              </div>\n          </div>\n          <div class=\"col-md-4\">\n              <div class=\"card card-profile\">\n                  <div class=\"card-avatar\">\n                      <a href=\"#pablo\">\n                          <img class=\"img\" src=\"../assets/img/faces/marc.jpg\" />\n                      </a>\n                  </div>\n                  <div class=\"card-body\">\n                      <h6 class=\"card-category text-gray\">CEO / Co-Founder</h6>\n                      <h4 class=\"card-title\">Alec Thompson</h4>\n                      <p class=\"card-description\">\n                          Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...\n                      </p>\n                      <a href=\"#pablo\" class=\"btn btn-danger btn-round\">Follow</a>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/user-profile/user-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserProfileComponent = (function () {
    function UserProfileComponent() {
    }
    UserProfileComponent.prototype.ngOnInit = function () {
    };
    UserProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user-profile',
            template: __webpack_require__("./src/app/user-profile/user-profile.component.html"),
            styles: [__webpack_require__("./src/app/user-profile/user-profile.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserProfileComponent);
    return UserProfileComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("./node_modules/hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map