'use strict';

app.factory('BlogService', ['$http', '$q', '$rootScope',
		function($http, $q, $rootScope) {
			console.log("BlogService...")

			var BASE_URL = 'http://localhost:8081/Binder'
				return {
				
				getSelectedBlog : function(id) {
					return $http
								.get(BASE_URL+'/blog/'+ id)
								.then(function(response) {
									return response.data;
								},
								function(errResponse) {
									console.error('Error while Fetching Blog.');
									return $q.reject(errResponse);
								});
				},
				
				fetchAllBlogs : function() {
					return $http
								.get(BASE_URL + '/blogs')
								.then(function(response) {
									return response.data;
								}, 
								function(errResponse) {
									console.error('Error while fetching Blogs');
									return $q.reject(errResponse);
								});
				},

				createBlog : function(blog) {
					return $http
								.post(BASE_URL + '/blog/', blog)
								.then(function(response) {
									return response.data;
								}, 
								function(errResponse) {
									console.error('Error while creating blog');
									return $q.reject(errResponse);
								});
				},
				
				updateBlog : function(blog, id) {
					return $http
								.put(BASE_URL+'/blog/'+id)
								.then(function(response) {
									return response.data;
								},
								function(errResponse) {
									console.error('Error while updating Blog');
									return $q.reject(errResponse);
								});
				},
				
				deleteBlog : function(id) {
					return $http
								.delete(BASE_URL+'/blog/'+id)
								.then(function(response) {
									return response.data;
								},
								function(errResponse) {
									console.log('Error while deleting Blog');
									return $q.reject(errResponse);
								});
				}
				
			};
		} ]);